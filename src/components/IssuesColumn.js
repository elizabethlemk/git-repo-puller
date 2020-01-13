import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Issue from "./Issue";

const IssuesColumn = props => {
  return (
    <div className="issue-column">
      <Droppable droppableId={props.currentRepo.name}>
        {provided => (
          <div
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.issues.map((issue, index) => (
              <Issue
                key={issue.id}
                issue={issue}
                index={index}
                setIssue={props.setIssue}
                setCurrentRepo={props.setCurrentRepo}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default IssuesColumn;
