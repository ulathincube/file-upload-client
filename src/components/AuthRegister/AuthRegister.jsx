import styles from "./AuthRegister.module.css";
import { useState } from "react";

function FirstGroup({ onEmailChange, onUsernameChange, username, email }) {
  return (
    <>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="username">
          Username
        </label>
        <input
          required={true}
          className={styles.field}
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={onUsernameChange}
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          required={true}
          type="email"
          className={styles.field}
          id="email"
          placeholder="Email address"
          value={email}
          onChange={onEmailChange}
        />
      </div>
    </>
  );
}

function SecondGroup({
  onPasswordChange,
  onConfirmPasswordChange,
  password,
  confirmPassword,
}) {
  return (
    <>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          required={true}
          className={styles.field}
          type={password ? "password" : "text"}
          id="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="confirm-password">
          Confirm Password
        </label>
        <input
          required={true}
          type={confirmPassword ? "password" : "text"}
          className={styles.field}
          id="confirm-password"
          placeholder="Password"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
        />
      </div>
    </>
  );
}

function AuthRegister() {
  const [userDetails, setUserDetails] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onNextButtonClick = () => {
    if (username && email) {
      setUserDetails(true);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const userDetails = {
      username,
      email,
      password,
    };
    console.log(userDetails);
  };

  return (
    <main className={styles.wrapper}>
      <section className={styles.parent}>
        <article className={styles.article}>
          <h1 className={styles.title}>Hey there.</h1>
        </article>
        <form onSubmit={onFormSubmit} className={styles.form}>
          {!userDetails ? (
            <FirstGroup
              username={username}
              email={email}
              onUsernameChange={onUsernameChange}
              onEmailChange={onEmailChange}
            />
          ) : (
            <SecondGroup
              password={password}
              confirmPassword={confirmPassword}
              onPasswordChange={onPasswordChange}
              onConfirmPasswordChange={onConfirmPasswordChange}
            />
          )}
          <div className={styles.container}>
            {!userDetails ? (
              <button
                onClick={onNextButtonClick}
                type="button"
                className={styles.action}
              >
                Next
              </button>
            ) : (
              <button type="submit" className={styles.action}>
                Register
              </button>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}

export default AuthRegister;
