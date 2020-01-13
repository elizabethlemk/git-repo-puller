import React from "react";

const Issue = props => {
  console.log(props);
  let issue = props.issue;

  // let created_date = new Date(issue.created_at);
  // created_date = created_date.toLocaleFormat("%m/%d/%Y");
  // let updated_date = new Date(issue.updated_at);
  // updated_date = `${Date.now() - updated_date}`;
  console.log(new Date(issue.created_at));
  return (
    <div
      className="item flex"
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
          <li>Created at: {issue.created_at} </li>
          {issue.updated_at ? <li>Updated at: {issue.updated_at} </li> : null}
        </ul>
      </div>
    </div>
  );
};

export default Issue;
