import React from "react";

const User = props => {
  let user = props.user;
  console.log(user);
  return (
    <div className="container flex align-center user-wrapper">
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        <img
          className="user-avatar"
          src={user.avatar_url}
          alt={`${user.login}'s Github avatar'`}
        />
      </a>
      <div className="user-details">
        <h1>{user.login}</h1>
        <ul>
          {user.name ? <li>{user.name}</li> : null}
          {user.location ? <li>{user.location}</li> : null}
          {user.bio ? <li>{user.bio}</li> : null}
          {user.blog ? (
            <li>
              <a
                href={`${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.blog}
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default User;
