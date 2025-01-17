import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function NoteItem(props) {
  const { note } = props;
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-text">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
          <button
            onClick={() => console.log("Edit clicked")}
            className="icon-button edit"
            title="Edit"
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button
            onClick={() => deleteNote(note._id)}
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
