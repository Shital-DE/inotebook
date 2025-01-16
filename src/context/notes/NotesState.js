import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
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
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
