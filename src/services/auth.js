// const baseUrl = `${import.meta.env.VITE_API_URL}/auth`;
const baseUrl = "/api/auth";

class Auth {
  static async loginUser(email, password) {
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) throw new Error("Failed to login");

      return await response.json();
    } catch (error) {
      if (error) throw error;
    }
  }

  static async registerUser(name, email, password) {
    try {
      const response = await fetch(`${baseUrl}/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) throw new Error("Failed to register");

      return await response.json();
    } catch (error) {
      if (error) throw error;
    }
  }

  static async logOutUser() {
    try {
      const response = await fetch(`${baseUrl}/logout`, {
        method: "post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Unable to log out user!");

      return await response.json();
    } catch (error) {
      if (error) throw error;
    }
  }
}

export default Auth;
