import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import note from "./Note";

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
      <CreateArea callback={addNote}/>
      {noteList.map((note, index)=>{
        return <Note noteId={note.id} key={note.id} title={note.title} content={note.content} deleteFunc={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
