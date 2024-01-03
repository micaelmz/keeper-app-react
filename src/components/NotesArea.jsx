import React from "react";
import Note from "./Note";

function NotesArea(props){

  return(
      props.noteList.map(
        (note, index) => {
          return <Note noteId={note.id} key={note.id} title={note.title} content={note.content} deleteFunc={props.callback}/>
        })
  );

}


export default NotesArea;