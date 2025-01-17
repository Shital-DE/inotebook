import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5500/api/";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4MzUzNzdhNDkyZDY4MDJjYmMxN2RlIn0sImlhdCI6MTczNjY2MTI5NX0.RcxgXFLERekBlkFrywYhPULDgXHP8hdwBCPN33JAfUI";

  const notesInitial = [
    {
      _id: "6785face7e240f00f1b73c591",
      user: "67835377a492d6802cbc17de",
      title: "Database passwords",
      description: "PostgreSQL = Sgt453@345 Mongo = MHn9085t6D",
      tag: "DE Company",
      date: "2025-01-14T05:49:02.412Z",
      __v: 0,
    },
    {
      _id: "6785face7e240f00f1b73c592",
      user: "67835377a492d6802cbc17de",
      title: "Database passwords",
      description: "PostgreSQL = Sgt453@345 Mongo = MHn9085t6D",
      tag: "DE Company",
      date: "2025-01-14T05:49:02.412Z",
      __v: 0,
    },
    {
      _id: "6785face7e240f00f1b73c593",
      user: "67835377a492d6802cbc17de",
      title: "Database passwords",
      description: "PostgreSQL = Sgt453@345 Mongo = MHn9085t6D",
      tag: "DE Company",
      date: "2025-01-14T05:49:02.412Z",
      __v: 0,
    },
    {
      _id: "6785face7e240f00f1b73c594",
      user: "67835377a492d6802cbc17de",
      title: "Database passwords",
      description: "PostgreSQL = Sgt453@345 Mongo = MHn9085t6D",
      tag: "DE Company",
      date: "2025-01-14T05:49:02.412Z",
      __v: 0,
    },
    {
      _id: "6785face7e240f00f1b73c595",
      user: "67835377a492d6802cbc17de",
      title: "Database passwords",
      description: "PostgreSQL = Sgt453@345 Mongo = MHn9085t6D",
      tag: "DE Company",
      date: "2025-01-14T05:49:02.412Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

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
    const result = response.json();
    // const note = {
    //   _id: title,
    //   user: "67835377a492d6802cbc17de",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2025-01-14T05:49:02.412Z",
    //   __v: 0,
    // };
    setNotes(notes.concat({ title, description, tag }));
  };

  // Update a note
  const updateNote = async (id, title, description, tag) => {
    const url = `${host}/notes/update-note/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const result = response.json();

    // for (let index = 0; index < notes.length; index++) {
    //   const element = notes[index];
    //   if (element._id === id) {
    //     element.title = title;
    //     element.description = description;
    //     element.tag = tag;
    //   }
    // }
  };

  // Delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
