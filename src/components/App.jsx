import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import note from "./Note";
import notesArea from "./NotesArea";
import NotesArea from "./NotesArea";

function App() {

  const [noteList, setNodeList] = useState([]);

  const addNote = (note) => {
    setNodeList((prevState)=>{
      return [...prevState, note]
    })
  };

  const deleteNote = (id) => {
    setNodeList((prevState)=>{
      return [...prevState].filter((note)=>{
        return note.id !== id;
      })
    })
  };

  return (
    <div>
      <Header />
      <CreateArea callback={addNote} />
      <NotesArea noteList={noteList} callback={deleteNote}/>
      <Footer />
    </div>
  );
}

export default App;
