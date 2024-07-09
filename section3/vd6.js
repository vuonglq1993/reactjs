import React from "react";

function Welcome({ name }) {
    return (
      <section>
        <h2 className="user-name">
          Hello, <span className="user-first-name">{name}</span> 🎉🔥
        </h2>
      </section>
    );
  }
  
  function App() {
    const names = ["Cuban", "Spencer", "Robert", "Einstein"];
    return (
      <div className="App">
        {names.map((nm) => (
          <Welcome name={nm} />
        ))}
      </div>
    );
  }
  export default App;