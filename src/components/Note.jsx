import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Zoom from "@mui/material/Zoom";

function Note(props) {
  return (
      <Zoom in={true}>
        <div className="note" id={"note-" + props.noteId}>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button id={"button-" + props.noteId} onClick={() => {
            props.deleteFunc(props.noteId)
          }}><DeleteIcon/></button>
        </div>
      </Zoom>
  );
}

export default Note;
