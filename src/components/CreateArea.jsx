import React, {useState} from "react";
import note from "./Note";

function CreateArea(props) {

  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [idCounter, setIdCounter] = useState(0);

  const noteTitleHandler = (event)=>{
    const value = event.target.value;
    setNoteTitle(value);
  };

  const noteContentHandler = (event)=>{
    const value = event.target.value;
    setNoteContent(value);
  };

  const nextId = () => {
    setIdCounter(prevState=> prevState+1)
  };

  return (
    <div>
      <form onSubmit={
        (event)=> {
          event.preventDefault();
          props.callback({title: noteTitle, content: noteContent, id: idCounter});
          setNoteContent("");
          setNoteTitle("");
          nextId();
        }
      }>
        <input onChange={noteTitleHandler} value={noteTitle} name="title" placeholder="Title" />
        <textarea onChange={noteContentHandler} value={noteContent} name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
