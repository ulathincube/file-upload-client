import Button from "../components/Button";
import { useRef, useState } from "react";
import File from "../services/file";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import Folders from "../components/Folders";
import Folder from "../components/Folder";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StyledButton from "./StyledButton";
import styles from "./CreateFolder.module.css";

function CreateFolder({ onToggle }) {
  const folderNameInputRef = useRef();

  const queryClient = useQueryClient();

  const newFolderMutation = useMutation({
    mutationFn: () => File.createNewFolder(folderNameInputRef.current.value),
    onSuccess: () => {
      queryClient.invalidateQueries(["uploads"]);
    },
  });

  const onFolderNameSubmit = async (event) => {
    event.preventDefault();

    const folderName = folderNameInputRef.current.value;

    if (folderName.length === 0) return;

    try {
      newFolderMutation.mutate(folderName);
      // await File.createNewFolder(folderName);
      onToggle();
    } catch (error) {
      console.log(error);
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
