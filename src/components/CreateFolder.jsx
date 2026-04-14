import Button from '../components/Button';
import { useRef, useState } from 'react';
import File from '../services/file';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import Folders from '../components/Folders';
import Folder from '../components/Folder';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CreateFolder() {
  const folderNameInputRef = useRef();

  const [showForm, setShowForm] = useState(false);

  const onShowForm = () => setShowForm(true);

  const queryClient = useQueryClient();

  const newFolderMutation = useMutation({
    mutationFn: () => File.createNewFolder(folderNameInputRef.current.value),
    onSuccess: () => {
      queryClient.invalidateQueries(['uploads']);
    },
  });

  const onFolderNameSubmit = async event => {
    event.preventDefault();

    const folderName = folderNameInputRef.current.value;

    if (folderName.length === 0) return;

    try {
      newFolderMutation.mutate(folderName);
      // await File.createNewFolder(folderName);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showForm ? (
        <form onSubmit={onFolderNameSubmit}>
          <div>
            <label htmlFor='folder'>Folder Name</label>
            <input ref={folderNameInputRef} type='text' name='folder' />
          </div>
          <div>
            <Button type='submit'>Create Folder</Button>
          </div>
        </form>
      ) : (
        <Button onClick={onShowForm}>Create A New Folder</Button>
      )}
    </>
  );
}

export default CreateFolder;
