import { useState } from "react";
export default function Form() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setPerson((prevPerson) => {
      return {
        ...prevPerson,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <form className="form">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={person.firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={person.lastName}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        id="email"
        onChange={handleChange}
        value={person.email}
      />
      <textarea
        name="comments"
        id="comments"
        cols="30"
        rows="10"
        placeholder="Enter your comment ..."
        value={person.comments}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
        checked={person.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
    </form>
  );
}
