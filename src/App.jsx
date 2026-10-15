import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './pages/Home'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Uploads from "./pages/Uploads";
import SingleFile from "./pages/SingleFile";
import About from "./pages/About";
import CurrentFolder from "./pages/CurrentFolder";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContext from "./context/AuthContext";
import Protected from "./components/Protected";
import NotificationContext from "./context/NotificationContext";
import ModalContext from "./context/ModalContext";
import { useState } from "react";
import Notification from "./components/Notification";
import Error from "./components/Error";
import useLocalStorage from "./hooks/useLocalStorage";

import { createPortal } from "react-dom";
import Modal from "./components/Modal";

function App() {
  const queryClient = new QueryClient();
  const [user, setUser] = useLocalStorage("user", null);
  const [message, setMessage] = useState("");

  const [showModal, setShowModal] = useState(false);

  const onToggleShowModal = () => {
    setShowModal(!showModal);
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
      <ModalContext value={[showModal, onToggleShowModal]}>
        <NotificationContext
          value={{
            message,
            createNotificationMessage: createNotificationMessage,
          }}
        >
          <QueryClientProvider client={queryClient}>
            <Notification />
            <Router>
              {showModal &&
                createPortal(<Modal />, document.getElementById("root"))}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="about" element={<About />} />
                <Route element={<Protected />}>
                  <Route path="uploads" element={<Uploads />} />
                  <Route path="uploads/:folder" element={<CurrentFolder />} />
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
