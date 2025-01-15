import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
  }, [a]);
  return <div>This is about. {a.state.name}</div>;
};

export default About;
