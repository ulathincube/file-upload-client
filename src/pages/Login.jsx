import { Link, useNavigate } from "react-router";
import Auth from "../services/auth";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import useNotification from "../hooks/useNotification";
import styles from "./Login.module.css";
import Button from "../components/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useAuth();
  const { createNotificationMessage } = useNotification();

  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const { error, data } = await Auth.loginUser(email, password);
      if (error) throw new Error(error);
      loginUser(data);
      navigate("/uploads");
    } catch (error) {
      createNotificationMessage(error.message);
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
      <Header />
      <form className={styles.form} onSubmit={loginHandler}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            className={styles.field}
            value={email}
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={onEmailChange}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className={styles.field}
            value={password}
            type="password"
            placeholder="Password"
            name="password"
            onChange={onPasswordChange}
          />
        </div>
        <div className={styles.group}>
          <Button className={styles.login} type="submit">
            Login
          </Button>
        </div>
      </form>
      <div className={styles.flow}>
        <Link className={styles.out} to="/register">
          No account? Register here!
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Login;
