import Header from '../components/Header';
import Footer from '../components/Footer';
import File from '../services/file';
import { useRef } from 'react';

function UploadFile() {
  const fileInputRef = useRef();
  const uploadFileHandler = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', fileInputRef.current.files[0]);

      const response = await File.uploadFile(formData);
      console.log({ response });
    } catch (error) {
      if (error) throw error;
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={uploadFileHandler} encType='multipart/form-data'>
        <div>
          <label htmlFor='file'>Select File</label>
          <input name='file' type='file' id='file' ref={fileInputRef} />
        </div>
        <div>
          <button type='submit'>Upload</button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default UploadFile;
