import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadFile from "./pages/UploadFile";
import Uploads from "./pages/Uploads";
import SingleFile from "./pages/SingleFile";
import CurrentFolder from "./pages/CurrentFolder";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContext from "./context/AuthContext";
import Protected from "./components/Protected";
import NotificationContext from "./context/NotificationContext";
import { useState } from "react";
import Notification from "./components/Notification";
import Error from "./components/Error";

function App() {
  const queryClient = new QueryClient();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const loginUser = (userObject) => {
    setUser(userObject);
  };

  const createNotificationMessage = (message) => {
    setMessage(message);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <AuthContext value={{ user, loginUser }}>
      <NotificationContext
        value={{
          message,
          createNotificationMessage: createNotificationMessage,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Notification />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route element={<Protected />}>
                <Route path="upload" element={<UploadFile />} />
                <Route path="uploads" element={<Uploads />} />
                <Route path="uploads/:folder" element={<CurrentFolder />} />
                <Route path="uploads/file/:fileId" element={<SingleFile />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </NotificationContext>
    </AuthContext>
  );
}

export default App;
