import Button from "../components/Button";
import { useRef, useState } from "react";
import File from "../services/file";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Folders from "../components/Folders";
import Folder from "../components/Folder";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateFile from "../components/CreateFile";
import CurrentFile from "../components/CurrentFile";
import CurrentFiles from "../components/CurrentFiles";
import ErrorBoundary from "../components/ErrorBoundary";

function Uploads() {
  const folderNameInputRef = useRef();

  const [showForm, setShowForm] = useState(false);

  const onShowForm = () => setShowForm(true);

  const queryClient = useQueryClient();

  const newFolderMutation = useMutation({
    mutationFn: () => File.createNewFolder(folderNameInputRef.current.value),
    onSuccess: () => {
      queryClient.invalidateQueries(["uploads"]);
    },
  });

  const { error, isError, data, isPending } = useQuery({
    queryFn: File.getAllFiles,
    queryKey: ["uploads"],
    retry: 1,
  });

  // [{name , id, files: []}]

  const onFolderNameSubmit = async (event) => {
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

  if (isPending) return <div>...Loading...</div>;

  if (isError) return <div>...Error...: {error.message}</div>;

  // [{name, id, files: []}]

  const filesData = data.map(({ id, name, files }) => {
    if (name === "/")
      return (
        <>
          {files.map((fileObject) => (
            <CurrentFile
              key={fileObject.id}
              name={fileObject.name}
              fileId={fileObject.id}
            />
          ))}
        </>
      );
    return <Folder key={id} name={name} />;
  });

  return (
    <>
      <Header />
      <ErrorBoundary fallback={<h1>filesData not rendering correctly</h1>}>
        {filesData}
      </ErrorBoundary>
      <CreateFile />
      {showForm ? (
        <form onSubmit={onFolderNameSubmit}>
          <div>
            <label htmlFor="folder">Folder Name</label>
            <input ref={folderNameInputRef} type="text" name="folder" />
          </div>
          <div>
            <Button type="submit">Create Folder</Button>
          </div>
        </form>
      ) : (
        <Button onClick={onShowForm}>Create A New Folder</Button>
      )}
      <Footer />
    </>
  );
}

export default Uploads;
