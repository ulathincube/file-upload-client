import { useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import File from "../services/file";
import CreateFolder from "../components/CreateFolder";
import CreateFile from "../components/CreateFile";
import CurrentFile from "../components/CurrentFile";
import { useQuery } from "@tanstack/react-query";
import CurrentFiles from "../components/CurrentFiles";
import ErrorBoundary from "../components/ErrorBoundary";
import Folder from "../components/Folder";
import Button from "../components/Button";
import { useState } from "react";
import StyledButton from "../components/StyledButton";

function CurrentFolder() {
  const { folder } = useParams();

  const { data, error, isError, isPending } = useQuery({
    queryKey: [`${folder}`],
    queryFn: () => File.getFilesFromFolder(folder),
    retry: 1,
  });

  const [showCreateFile, setShowCreateFile] = useState(false);

  const onToggleShowCreateFile = () => {
    setShowCreateFile(!showCreateFile);
  };

  if (isPending) return <div>...Loading...</div>;

  if (isError) return <div>...Error...{error.message}</div>;

  const { data: serverData } = data;

  const filesData = serverData.files.map(({ name, id }) => (
    <CurrentFile key={id} name={name} fileId={id} />
  ));
  return (
    <>
      <Header />
      <ErrorBoundary fallback={<h1>Error rendering CurrentFiles</h1>}>
        <CurrentFiles>{filesData}</CurrentFiles>
      </ErrorBoundary>
      {showCreateFile ? (
        <CreateFile folder={folder} onToggle={onToggleShowCreateFile} />
      ) : (
        <StyledButton onClick={onToggleShowCreateFile}>
          Upload File
        </StyledButton>
      )}
      {/* <CreateFolder /> */}
      <Footer />
    </>
  );
}

export default CurrentFolder;
