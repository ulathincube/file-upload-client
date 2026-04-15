import { Link, useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FileDetails from "../components/FileDetails";
import { useQuery } from "@tanstack/react-query";
import File from "../services/file";
import ErrorBoundary from "../components/ErrorBoundary";

function SingleFile() {
  const { fileId } = useParams();

  const { data, error, isError, isPending } = useQuery({
    queryKey: ["upload", fileId],
    queryFn: () => File.getSingleFile(fileId),
  });

  if (isPending) return <div>...Loading...</div>;

  if (isError) return <div>...Error: {error.message}</div>;

  console.log(data, error, isError, isPending);

  const { data: serverData } = data;
  return (
    <>
      <Header />
      <ErrorBoundary fallback={<p>Error rendering file details</p>}>
        <FileDetails
          name={serverData.name}
          createdAt={serverData.createdAt}
          id={serverData.id}
          size={serverData.size}
          url={serverData.url}
        />
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default SingleFile;
