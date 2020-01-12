import React, { useState } from "react";

const Form = props => {
  const [username, setUsername] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data, username);
        // props.onSubmit(data);
        setUsername("");
      });
  };
  return (
    <form className="username-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="Enter a Github username"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
