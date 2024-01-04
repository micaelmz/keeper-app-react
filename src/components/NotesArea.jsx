import React from "react";
import Note from "./Note";
import Zoom from "@mui/material/Zoom";

function NotesArea(props) {
  return (
      props.noteList.map((note, index) => (
          <Note
              noteId={note.id}
              title={note.title}
              content={note.content}
              deleteFunc={props.callback}
          />
      ))
  );
}

export default NotesArea;
