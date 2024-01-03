import React from "react";

function Note(props) {
  return (
    <div className="note" id={"note-" + props.noteId}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button id={"button-" + props.noteId} onClick={()=>{props.deleteFunc(props.noteId)}}>DELETE</button>
    </div>
  );
}

export default Note;
