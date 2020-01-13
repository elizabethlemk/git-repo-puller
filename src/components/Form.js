import React, { useState } from "react";

const Form = props => {
  const [username, setUsername] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}/repos?sort=created`)
      .then(resp => resp.json())
      .then(data => {
        props.setRepos(data);
        localStorage.setItem("currentRepos", JSON.stringify(data));
        setUsername("");
      });
    fetch(`https://api.github.com/users/${username}`)
      .then(resp => resp.json())
      .then(data => {
        props.setUser(data);
        localStorage.setItem("currentUser", JSON.stringify(data));
      });
  };
  return (
    <form className="username-form text-center" onSubmit={handleSubmit}>
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
