import React from "react";
import Note from "./Note";
import Zoom from "@mui/material/Zoom";

function NotesArea(props) {

  const {notesList, deleteNoteCallback } = props;

  return (
      notesList.map((note, index) => (
          <Note
              noteId={note.id}
              title={note.title}
              content={note.content}
              deleteNoteCallback={deleteNoteCallback}
          />
      ))
  );
}

export default NotesArea;
