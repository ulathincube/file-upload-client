import styles from "./CreateFolder.module.css";
import Button from "../Button";
import { useRef } from "react";
import File from "../../services/file";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import Folders from "../Folders";
import Folder from "../Folder";
import Header from "../Header";
import Footer from "../Footer";
import StyledButton from "../StyledButton";
import useNotification from "../../hooks/useNotification";

function CreateFolder({ onToggle }) {
  const folderNameInputRef = useRef();

  const queryClient = useQueryClient();

  const { createNotificationMessage } = useNotification();

  const newFolderMutation = useMutation({
    mutationFn: () => File.createNewFolder(folderNameInputRef.current.value),
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries(["uploads"]);
      createNotificationMessage(data);
    },
    onError: ({ error }) => {
      createNotificationMessage(error);
    },
  });

  const onFolderNameSubmit = async (event) => {
    event.preventDefault();
    const folderName = folderNameInputRef.current.value;
    if (folderName.length === 0) return;
    try {
      newFolderMutation.mutate(folderName);
      onToggle();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={onFolderNameSubmit}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="folder">
          Folder Name
        </label>
        <input
          id="folder"
          className={styles.input}
          ref={folderNameInputRef}
          type="text"
          name="folder"
        />
      </div>
      <div className={styles.group}>
        <Button className={styles.create} type="submit">
          Create Folder
        </Button>
        <Button className={styles.cancel} onClick={onToggle}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default CreateFolder;
