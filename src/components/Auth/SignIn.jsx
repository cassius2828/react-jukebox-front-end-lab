import { useState } from "react";
import { signin } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  username: "",
  password: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const handleFormUpdate = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signin(formData);
    navigate("/");
  };
  return (
    <form className="auth-form" id="sign-up-form">
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
      <button onClick={(e) => handleSubmit(e)} type="submit">
        sign in
      </button>
    </form>
  );
};
export default SignIn;
