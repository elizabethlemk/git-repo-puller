import React from "react";

const Repo = props => {
  let { repo } = props;

  const handleIssue = () => {
    fetch(
      `https://api.github.com/repos/${props.user}/${repo.name}/issues?sort=updated&direction=desc`
    )
      .then(resp => resp.json())
      .then(data => {
        props.setIssue(data);
        props.setCurrentRepo({ name: repo.name, html_url: repo.html_url });
        localStorage.setItem("currentIssues", JSON.stringify(data));
        localStorage.setItem(
          "currentRepo",
          JSON.stringify({
            name: repo.name,
            html_url: repo.html_url
          })
        );
      });
  };

  return (
    <div className="item" data-id={`repo-${repo.id}`}>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <h3>{repo.name}</h3>
      </a>
      <p>{repo.description ? repo.description : null}</p>
      <div>
        {repo.stargazers_count ? (
          <span className="stars">
            <a
              href={`${repo.html_url}/stargazers`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-star"></i> {repo.stargazers_count}
            </a>
          </span>
        ) : null}

        {repo.forks_count ? (
          <span className="forks">
            <a
              href={`${repo.html_url}/network/members`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code-branch"></i> {repo.forks_count}
            </a>
          </span>
        ) : null}

        {repo.has_issues ? (
          <span className="issues btn" onClick={handleIssue}>
            View issues
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Repo;
