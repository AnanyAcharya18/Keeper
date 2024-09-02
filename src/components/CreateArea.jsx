import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote]=useState({
    title: "",
    content: ""
  });

  function submitNote(event){
    props.onAdd(note);
    event.preventDefault();
  }

  function handleChange(event){
    const {name, value}= event.target;

    setNote(previous => {
      return{
        ...previous,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input name="title" 
        onChange={handleChange}  
        value={note.value} 
        placeholder="Title" />

        <textarea name="content" 
        onChange={handleChange} 
        value={note.content} 
        placeholder="Content" rows="3" />

        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
