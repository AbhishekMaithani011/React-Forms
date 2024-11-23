import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [handleText, setText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handlingText(event) {
    setText(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {handleText} </h1>
      <form onSubmit={handlingText}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
