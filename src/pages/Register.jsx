import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Auth from "../services/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Register.module.css";
import Button from "../components/Button";
import useNotification from "../hooks/useNotification";
import useAuth from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/uploads");
  }, [user, navigate]);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => Auth.registerUser(name, email, password),

    onSuccess: ({ data, error }) => {
      if (error) {
        createNotificationMessage(error);
        return;
      }
      createNotificationMessage(data);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    },
  });

  const { createNotificationMessage } = useNotification();

  const onNameChange = ({ target: { value } }) => setName(value);

  const onEmailChange = ({ target: { value } }) => setEmail(value);

  const onPasswordChange = ({ target: { value } }) => setPassword(value);

  const onConfirmPasswordChange = ({ target: { value } }) =>
    setConfirmPassword(value);

  const registerUserHandler = async (event) => {
    event.preventDefault();

    // throw error here
    if (confirmPassword !== password) {
      return createNotificationMessage("Passwords are not similar!");
    }

    mutate(name, email, password);
  };

  if (isError) return <Error error={error} />;

  if (isPending) return <Loading />;

  return (
    <>
      <Header />
      <h1 className={styles.heading}>Register</h1>
      <form className={styles.form} onSubmit={registerUserHandler}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="username">
            Full Name
          </label>
          <input
            id="username"
            className={styles.field}
            type="text"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            className={styles.field}
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
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
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            className={styles.field}
            type="password"
            placeholder="Password"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
          />
        </div>
        <div className={styles.group}>
          <Button className={styles.register} type="submit">
            Register
          </Button>
        </div>
      </form>
      <div className={styles.flow}>
        <Link className={styles.out} to="/login">
          Already have an account? Login here!
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Register;
