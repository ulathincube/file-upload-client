import Header from "../../components/Header";
import Footer from "../../components/Footer";
import File from "../../services/file";
import { useRef } from "react";
import useNotification from "../../hooks/useNotification";

function UploadFile() {
  const fileInputRef = useRef();

  const { createNotificationMessage } = useNotification();

  const uploadFileHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", fileInputRef.current.files[0]);

      const { error, data } = await File.uploadFile(formData);

      if (data) return createNotificationMessage(data);

      if (error) throw new Error(error);
    } catch (error) {
      createNotificationMessage(error.message);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={uploadFileHandler} encType="multipart/form-data">
        <div>
          <label htmlFor="file">Select File</label>
          <input name="file" type="file" id="file" ref={fileInputRef} />
        </div>
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default UploadFile;
