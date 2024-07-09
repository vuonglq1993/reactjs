import React from "react";

function App() {
    return (
      <div className="App">
        <Welcome name="Neo" />
      </div>
    );
  }
  function Welcome(props) {
    return (
      <section>
        <h1>
          Hello, <span>{props.name}</span> 🎉🎉
        </h1>
      </section>
    );
  }
  
  export default App;

  