import React from "react";
import Moment from "react-moment";

const Issue = props => {
  console.log(props);
  let issue = props.issue;

  return (
    <div
      className="item flex align-center"
      data-id={`issue-${issue.id}`}
      data-position={issue.number}
    >
      <a href={issue.user.html_url}>
        <img
          className="user-avatar"
          src={issue.user.avatar_url}
          alt={`${issue.user.login}'s Github avatar'`}
        />
      </a>
      <div>
        <ul>
          <li>{issue.title}</li>
          <li>
            Created:{" "}
            {<Moment format="MM/DD/YYYY" date={new Date(issue.created_at)} />}
          </li>
          {"   "}
          {issue.updated_at ? (
            <li>
              Updated: {<Moment fromNow date={new Date(issue.updated_at)} />}{" "}
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Issue;
