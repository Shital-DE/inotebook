import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5500/api";
  const token = localStorage.getItem("token");

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = async () => {
    const url = `${host}/notes/fetch-all-notes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const result = await response.json();
    setNotes(result);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    const url = `${host}/notes/add-note`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    await response.json();
    getNotes();
  };

  // Update a note
  const editNotes = async (id, title, description, tag) => {
    const url = `${host}/notes/update-note/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    await response.json();
    getNotes();
  };

  // Delete a note
  const deleteNote = async (id) => {
    const url = `${host}/notes/delete-note/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const result = await response.json();
    if (result["message"] === "success") {
      getNotes();
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNotes, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
