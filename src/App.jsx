import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Uploads from "./pages/Uploads";
import SingleFile from "./pages/SingleFile";
import About from "./pages/About";
import CurrentFolder from "./pages/CurrentFolder";
import Folder from "./pages/Folder";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContext from "./context/AuthContext";
import Protected from "./components/Protected";
import NotificationContext from "./context/NotificationContext";
import ModalContext from "./context/ModalContext";
import { useState, useEffect } from "react";
import Notification from "./components/Notification";
import Error from "./components/Error";
import useLocalStorage from "./hooks/useLocalStorage";
import MobileMenu from "./components/MobileMenu";
import Modal from "./components/Modal";

const container = document.querySelector("#modal");

function App() {
  const queryClient = new QueryClient();
  const [user, setUser] = useLocalStorage("user", null);
  const [message, setMessage] = useState("");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      container.style.visibility = "visible";
      container.style.pointerEvents = "all";
      container.style.display = "flex";
    }

    return () => {
      container.style.visibility = "hidden";
      container.style.pointerEvents = "none";
      container.style.display = "none";
    };
  }, [showModal]);

  const onShowModal = () => {
    setShowModal(true);
  };

  const onHideModal = () => {
    setShowModal(false);
  };

  const loginUser = (userObject) => {
    setUser(userObject);
  };

  const createNotificationMessage = (message) => {
    setMessage(message);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <AuthContext value={{ user, loginUser }}>
      <ModalContext value={{ showModal, onShowModal, onHideModal }}>
        <NotificationContext
          value={{
            message,
            createNotificationMessage: createNotificationMessage,
          }}
        >
          <QueryClientProvider client={queryClient}>
            <Notification />
            <Router>
              {showModal && <MobileMenu />}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="about" element={<About />} />
                <Route element={<Protected />}>
                  <Route path="uploads" element={<Uploads />} />
                  <Route path="uploads/:folder" element={<Folder />} />
                  <Route path="uploads/file/:fileId" element={<SingleFile />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </QueryClientProvider>
        </NotificationContext>
      </ModalContext>
    </AuthContext>
  );
}

export default App;
