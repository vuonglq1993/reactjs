import React from "react";

function App() {
    return (
      <div className="App">
        <Welcome name="Neo" />
      </div>
    );
  }
  function Welcome({ name }) {
    return (
      <section>
        <h1>
          Hello, <span>{name}</span> 🎉🎉
        </h1>
      </section>
    );
  }
  export default App;
  