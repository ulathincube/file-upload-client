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

      return await response.json();
    } catch (error) {
      if (error) throw error;
    }
  }
}

export default Auth;
