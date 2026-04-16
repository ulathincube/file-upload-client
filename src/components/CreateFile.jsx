import File from "../services/file";
import { useRef } from "react";
import Button from "./Button";
import styles from "./CreateFile.module.css";
import StyledButton from "./StyledButton";
import useNotification from "../hooks/useNotification";

function CreateFile({ folder = null, onToggle }) {
  const fileInputRef = useRef();

  const { createNotificationMessage } = useNotification();

  const uploadFileHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", fileInputRef.current.files[0]);

      const { data, error } = folder
        ? await File.createFileInFolder({ folder, file: formData })
        : await File.uploadFile(formData);

      if (error) throw new Error(error);
      createNotificationMessage(data);
    } catch (error) {
      createNotificationMessage(error.message);
    }
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={uploadFileHandler}
        encType="multipart/form-data"
      >
        <div className={styles.group}>
          {/* <label htmlFor="file">Upload File</label> */}
          <input
            name="file"
            type="file"
            id="file"
            ref={fileInputRef}
            className={styles.file}
          />
        </div>
        <div className={styles.actions}>
          <Button className={styles.create} type="submit">
            <span className="material-symbols-outlined">upload</span>
            <span> Upload File</span>
          </Button>
          <Button className={styles.cancel} onClick={onToggle}>
            <span className="material-symbols-outlined">cancel</span>
            <span>Cancel</span>
          </Button>
        </div>
      </form>
    </>
  );
}

export default CreateFile;
