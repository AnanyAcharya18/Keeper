import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes]=useState([]);

  function addNote(newnote){
    setNotes(prevNotes => {
    return [...prevNotes,newnote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteitem,index) =>{
        return index !==id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteitem,index) => {
        return <Note
        key={index}
        id={index}
        title={noteitem.title}
        content={noteitem.content} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
