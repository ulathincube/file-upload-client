import styles from "./Uploads.module.css";
import Button from "../../components/Button";
import { useState, Fragment } from "react";
import File from "../../services/file";
import { useQuery } from "@tanstack/react-query";
import Folders from "../../components/Folders";
import Folder from "../../components/Folder";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CreateFile from "../../components/CreateFile";
import CreateFolder from "../../components/CreateFolder";
import CurrentFile from "../../components/CurrentFile";
import CurrentFiles from "../../components/CurrentFiles";
import ErrorBoundary from "../../components/ErrorBoundary";
import StyledButton from "../../components/StyledButton";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Navigation from "../../components/Navigation";

function Uploads() {
  // const folderNameInputRef = useRef();

  const [showForm, setShowForm] = useState(false);

  const [showCreateFile, setShowCreateFile] = useState(false);

  const onToggleShowForm = () => setShowForm(!showForm);

  const onToggleShowCreateFile = () => setShowCreateFile(!showCreateFile);

  // const queryClient = useQueryClient();

  // const newFolderMutation = useMutation({
  //   mutationFn: () => File.createNewFolder(folderNameInputRef.current.value),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["uploads"]);
  //   },
  // });

  const { error, isError, data, isPending } = useQuery({
    queryFn: File.getAllFiles,
    queryKey: ["uploads"],
    retry: 1,
  });

  // [{name , id, files: []}]

  // const onFolderNameSubmit = async (event) => {
  //   event.preventDefault();

  //   const folderName = folderNameInputRef.current.value;

  //   if (folderName.length === 0) return;

  //   try {
  //     newFolderMutation.mutate(folderName);
  //     // await File.createNewFolder(folderName);
  //     setShowForm(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (isPending) return <Loading />;

  if (isError) {
    console.log(isError, error);
    return <Error error={error} />;
  }

  // [{name, id, files: []}]

  const { data: serverData } = data;

  const filesData = serverData.map(({ id, name, files }) => {
    if (name === "/")
      return (
        <Fragment key={id}>
          {files.map((fileObject) => (
            <CurrentFile
              key={fileObject.id}
              name={fileObject.name}
              fileId={fileObject.id}
            />
          ))}
        </Fragment>
      );
    return <Folder key={id} name={name} />;
  });

  return (
    <>
      <Header />
      <Navigation current="uploads" />
      <ErrorBoundary fallback={<h1>filesData not rendering correctly</h1>}>
        <CurrentFiles>{filesData}</CurrentFiles>
      </ErrorBoundary>
      <section className={styles.actions}>
        {showCreateFile ? (
          <CreateFile onToggle={onToggleShowCreateFile} />
        ) : (
          <StyledButton onClick={onToggleShowCreateFile}>
            Upload File
          </StyledButton>
        )}
        {showForm ? (
          <CreateFolder onToggle={onToggleShowForm} />
        ) : (
          <StyledButton onClick={onToggleShowForm}>
            Create A New Folder
          </StyledButton>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Uploads;
