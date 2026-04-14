const baseUrl = "/api/files";

class File {
  static async uploadFile(file) {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        credentials: "include",
        body: file,
      });

      if (!response.ok) throw new Error("Failed to upload file.");

      return await response.json();
    } catch (error) {
      if (error) throw error;
    }
  }

  static async createNewFolder(folderName) {
    try {
      const response = await fetch(`${baseUrl}/folders`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          folder: folderName,
        }),
      });

      if (!response.ok) throw new Error("Failed to create a new folder!");

      return await response.json();
    } catch (error) {
      if (error) throw error;
    }
  }

  static async getAllFiles() {
    try {
      const response = await fetch(`${baseUrl}/folders`, {
        credentials: "include",
      });

      if (!response.ok) throw new Error("Failed to get all files");

      return await response.json();
    } catch (error) {
      if (error) throw error;
    }
  }

  static async getFilesFromFolder(folderName) {
    try {
      const response = await fetch(`${baseUrl}/folders/${folderName}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok)
        throw new Error("Failed to get files from this folder!");

      return await response.json();
    } catch (error) {
      if (error) throw error;
    }
  }

  static async createFileInFolder({ folder, file }) {
    try {
      const response = await fetch(`${baseUrl}/folders/${folder}`, {
        method: "POST",
        credentials: "include",
        body: file,
      });

      if (!response.ok) throw new Error("Failed to create file");

      return await response.json();
    } catch (error) {
      if (error) throw error;
    }
  }

  static async getSingleFile(fileId) {
    try {
      const response = await fetch(`${baseUrl}/file/${fileId}`, {
        credentials: "include",
      });

      return await response.json();
    } catch (error) {
      if (error) throw error;
    }
  }
}

export default File;
