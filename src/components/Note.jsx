import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Zoom from "@mui/material/Zoom";

function Note(props) {

  // Callbacks
  const { deleteNoteCallback } = props;

  // Values
  const { title, content, noteId} = props;

  return (
      <Zoom in={true}>
        <div className="note" id={"note-" + noteId}>
          <h1>{title}</h1>
          <p>{content}</p>
          <button id={"button-" + noteId} onClick={() => deleteNoteCallback(noteId)}>
            <DeleteIcon/>
          </button>
        </div>
      </Zoom>
  );
}

export default Note;
