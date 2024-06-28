import { useState } from "react";
import { signup } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  username: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialFormData);
const navigate = useNavigate()
  const handleFormUpdate = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
    navigate('/')
  };

  return (
    <form className="auth-form" id="sign-up-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          onChange={handleFormUpdate}
          id="username"
          name="username"
          type="text"
          value={formData.username}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          onChange={handleFormUpdate}
          id="password"
          name="password"
          type="password"
          value={formData.password}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          onChange={handleFormUpdate}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
