import { Link, useNavigate } from "react-router";
import { useState } from "react";
import Auth from "../services/auth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onNameChange = ({ target: { value } }) => setName(value);

  const onEmailChange = ({ target: { value } }) => setEmail(value);

  const onPasswordChange = ({ target: { value } }) => setPassword(value);

  const onConfirmPasswordChange = ({ target: { value } }) =>
    setConfirmPassword(value);

  const registerUserHandler = async (event) => {
    event.preventDefault();

    // throw error here
    if (confirmPassword !== password) return;

    try {
      const newUser = await Auth.registerUser(name, email, password);
      console.log(newUser);
      if (newUser) return navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={registerUserHandler}>
        <div>
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="text"
            placeholder="Password"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      <div>
        <Link to="/login">Already have an account? Login here!</Link>
      </div>
    </>
  );
}

export default Register;
