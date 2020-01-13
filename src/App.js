import React, { useState } from "react";
import Form from "./components/Form";
import User from "./components/User";
import Repo from "./components/Repo";
import Issue from "./components/Issue";

const App = () => {
  // Store Github User and Repo info in Local Storage
  let localUser = JSON.parse(localStorage.getItem("currentUser"));
  let localRepos = JSON.parse(localStorage.getItem("currentRepos"));
  let localIssues = JSON.parse(localStorage.getItem("currentIssues"));
  let localCurrentRepo = JSON.parse(localStorage.getItem("currentRepo"));

  // set state with local storage or GET request
  const [user, setUser] = useState(localUser ? localUser : "");
  const [repos, setRepos] = useState(localRepos ? localRepos : "");
  const [currentRepo, setCurrentRepo] = useState(
    localCurrentRepo ? localCurrentRepo : ""
  );
  const [issues, setIssue] = useState(localIssues ? localIssues : "");
  // ISSUE: when you enter a new username, the old issues still show
  console.log(currentRepo);
  return (
    <div className="main-container">
      <Form setUser={setUser} setRepos={setRepos} />
      {user ? <User user={user} repos={repos} /> : null}
      <div className="container flex">
        {repos ? (
          <div
            className="repo-wrapper"
            style={issues ? { width: "50%" } : null}
          >
            <h2>Repositories</h2>
            {repos.map(repo => (
              <Repo
                key={repo.id}
                repo={repo}
                user={user.login}
                setIssue={setIssue}
                setCurrentRepo={setCurrentRepo}
              />
            ))}
          </div>
        ) : null}
        {issues ? (
          <div className="issue-wrapper">
            <h2>
              Issues for{" "}
              <a
                href={currentRepo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentRepo.name}
              </a>
            </h2>
            {issues.length > 0 ? (
              issues.map(issue => <Issue key={issue.id} issue={issue} />)
            ) : (
              <div className="item">There aren't any open issues!</div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
