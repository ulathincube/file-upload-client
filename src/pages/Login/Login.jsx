import { Link, useNavigate } from "react-router";
import styles from "./Login.module.css";
import Auth from "../../services/auth";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useAuth from "../../hooks/useAuth";
import useNotification from "../../hooks/useNotification";
import Button from "../../components/Button";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useMutation } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [, setUserStore] = useLocalStorage("user", null);
  const { user, loginUser } = useAuth();
  const { createNotificationMessage } = useNotification();

  useEffect(() => {
    if (user) navigate("/uploads");
  }, [user, navigate]);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => Auth.loginUser(email, password),
    onSuccess: ({ data, error }) => {
      if (error) {
        createNotificationMessage(error);
        return;
      }

      loginUser(data);
      setUserStore(data);
      createNotificationMessage("You are now logged in!");
      setTimeout(() => {
        navigate("/uploads");
      }, 1500);
    },
  });

  console.log({ isError, error });

  const loginHandler = async (event) => {
    event.preventDefault();
    mutate(email, password);
  };

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  // if (isError) return <Error error={error} />;

  if (isPending) return <Loading />;

  return (
    <>
      <Header />
      <h1 className={styles.heading}>Log In</h1>
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
