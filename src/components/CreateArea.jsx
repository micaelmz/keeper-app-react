import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  // Callbacks
  const {nextIdCallback, addNoteCallback, } = props;

  // Values
  const { lastId } = props;

  // States
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Handlers
  const noteHandler = (event) => {
    const {value, name} = event.target;
    setNote(prevState=> ({...prevState, [name]: value}) );
  };

  // Functions
  const resetInputs = () => {
    setNote({
      title: "",
      content: ""
    });
  };
  const expand = () => {
    setExpanded(true);
  };
  const collapse = () => {
    setExpanded(false);
  }

  return (
      <div>
        <form className="create-note" onSubmit={event => {
            event.preventDefault();
            note.id = lastId
            addNoteCallback(note);
            nextIdCallback();
            resetInputs();
            collapse();
          }
        }>

          {isExpanded &&
            <input onChange={noteHandler} value={note.title} name="title" placeholder="Title"/>
          }

          <textarea onClick={expand} onChange={noteHandler} value={note.content}
                    name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1}/>

          <Zoom in={isExpanded}>
            <button><AddIcon/></button>
          </Zoom>

        </form>

      </div>
  );
}

export default CreateArea;
