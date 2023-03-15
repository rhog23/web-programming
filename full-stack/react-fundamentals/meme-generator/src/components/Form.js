import { useState } from "react";
export default function Form() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "unemployed",
    favColor: "",
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(person);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
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
      <br />
      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          name="employment"
          id="unemployed"
          value="unemployed"
          checked={person.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          name="employment"
          id="part-time"
          value="part-time"
          checked={person.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input
          type="radio"
          name="employment"
          id="full-time"
          value="full-time"
          checked={person.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
      </fieldset>
      <br />
      <label htmlFor="favColor">What is your favorite color?</label>
      <select
        name="favColor"
        id="favColor"
        value={person.favColor}
        onChange={handleChange}
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <button>Submit</button>
    </form>
  );
}
