import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const [isExpanded, setExpanded] = useState(false);

  const noteTitleHandler = (event) => {
    const value = event.target.value;
    setNoteTitle(value);
  };

  const noteContentHandler = (event) => {
    const value = event.target.value;
    setNoteContent(value);
  };

  const expand = () => {
    setExpanded(true);
  };

  const {nextId, lastId, addNote} = props;

  return (
      <div>
        <form className="create-note" onSubmit={
          (event) => {
            event.preventDefault();
            addNote({title: noteTitle, content: noteContent, id: lastId});
            setNoteContent("");
            setNoteTitle("");
            nextId();
          }
        }>

          {isExpanded &&
              <input onChange={noteTitleHandler}
                     value={noteTitle} name="title"
                     placeholder="Title"/>
          }

          <textarea
              onChange={noteContentHandler}
              onClick={expand}
              value={noteContent} name="content"
              placeholder="Take a note..." rows={isExpanded ? 3 : 1}/>

          <Zoom in={isExpanded}>
            <button><AddIcon/></button>
          </Zoom>

        </form>
      </div>
  );
}

export default CreateArea;
