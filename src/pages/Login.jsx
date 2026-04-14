import { Link, useNavigate } from "react-router";
import Auth from "../services/auth";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const user = await Auth.loginUser(email, password);
      if (user) return navigate("/uploads");
    } catch (error) {
      console.log(error.message);
    }
  };

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <>
      <form onSubmit={loginHandler}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            value={email}
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={onEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="text"
            placeholder="Password"
            name="password"
            onChange={onPasswordChange}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <div>
        <Link to="/register">No account? Register here!</Link>
      </div>
    </>
  );
}

export default Login;
