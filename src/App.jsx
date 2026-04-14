import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadFile from "./pages/UploadFile";
import Uploads from "./pages/Uploads";
import SingleFile from "./pages/SingleFile";
import CurrentFolder from "./pages/CurrentFolder";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="upload" element={<UploadFile />} />
          <Route path="uploads" element={<Uploads />} />
          <Route path="uploads/:folder" element={<CurrentFolder />} />
          <Route path="uploads/file/:fileId" element={<SingleFile />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
