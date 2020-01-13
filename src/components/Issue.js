import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Moment from "react-moment";

const Issue = props => {
  let { issue } = props;

  return (
    <Draggable draggableId={`issue-${issue.id}`} index={props.index}>
      {provided => (
        <div
          className="item flex align-center"
          data-id={`issue-${issue.id}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          innerRef={provided.innerRef}
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
                {
                  <Moment
                    format="MM/DD/YYYY"
                    date={new Date(issue.created_at)}
                  />
                }
              </li>
              {"   "}
              {issue.updated_at ? (
                <li>
                  Updated:{" "}
                  {<Moment fromNow date={new Date(issue.updated_at)} />}{" "}
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Issue;
