import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import NotesArea from "./NotesArea";

function App() {

  const [notesList, setNodeList] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const addNote = (note) => {
    setNodeList((prevState) => {
      return [...prevState, note]
    })
  };

  const deleteNote = (id) => {
    setNodeList((prevState) => {
      return [...prevState].filter((note) => {
        return note.id !== id;
      })
    })
  };

  const nextId = () => {
    setIdCounter(prevState => prevState + 1)
  };

  return (
      <div>
        <Header/>
        <CreateArea addNoteCallback={addNote} nextIdCallback={nextId} lastId={idCounter} />
        <NotesArea notesList={notesList} deleteNoteCallback={deleteNote}/>
        <Footer/>
      </div>
  );
}

export default App;
