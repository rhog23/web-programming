import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinNewsLetter: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (formData.password !== formData.passwordConfirm) {
      console.log("Passwords don't match");
    } else {
      console.log("Successfully signed up");
      formData.joinNewsLetter &&
        console.log("Thanks for signing up for our newsletter");
    }
  }
  return (
    <div className="signup-form-container">
      <form action="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="passwordConfirm">Confirm Password: </label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
        />
        <br />
        <input
          type="checkbox"
          name="joinNewsLetter"
          id="joinNewsLetter"
          onChange={handleChange}
          checked={formData.joinNewsLetter}
        />
        <label htmlFor="joinNewsLetter"> I want to join the newsletter</label>
        <br />
        <button>Sign up</button>
      </form>
    </div>
  );
}
