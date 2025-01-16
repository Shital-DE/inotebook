import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button
            onClick={() => console.log("Edit clicked")}
            className="icon-button edit"
            title="Edit"
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button
            onClick={() => console.log("Delete clicked")}
            className="icon-button delete"
            title="Delete"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
