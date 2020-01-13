import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Form from "./components/Form";
import User from "./components/User";
import Repo from "./components/Repo";
import IssuesColumn from "./components/IssuesColumn";

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

  // closes the issues wrapper
  const handleClose = () => {
    setIssue("");
    setCurrentRepo("");
    localStorage.setItem("currentIssues", null);
    localStorage.setItem("currentRepo", null);
  };

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // Rearrange issues array
    const itemGrabbed = issues.find(
      issue => `issue-${issue.id}` === draggableId
    );
    const newIssueIds = [...issues];
    newIssueIds.splice(source.index, 1);
    newIssueIds.splice(destination.index, 0, itemGrabbed);
    // change issues state + local storage
    setIssue(newIssueIds);
    localStorage.setItem("currentIssues", JSON.stringify(newIssueIds));
  };

  // Todo list:
  // unit testing
  return (
    <div className="main-container">
      <Form
        setUser={setUser}
        setRepos={setRepos}
        setCurrentRepo={setCurrentRepo}
        setIssue={setIssue}
      />
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
          <>
            <div className="modal-wrapper"></div>
            <div className="issue-wrapper">
              <i className="fas fa-times close-icon" onClick={handleClose}></i>
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
                <DragDropContext onDragEnd={onDragEnd}>
                  <IssuesColumn
                    issues={issues}
                    currentRepo={currentRepo}
                    setCurrentRepo={setCurrentRepo}
                    setIssue={setIssue}
                  />
                </DragDropContext>
              ) : (
                <div className="item">There aren't any open issues!</div>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default App;
