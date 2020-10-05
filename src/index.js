import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  return <div>
  <header className="header">
      <div><img srcSet="/images/ironhack-logo.svg" alt=""/></div>
    <div>
    <img srcSet="/images/menu-top.svg" alt="" />
    </div>
  </header>
  <section className="section">
      <h1>Say hello to <br/>
        ReactJS
      </h1>
      <p>
          You will lear how to use <br/>
          the most popular frontend library, <br/>
          and become super Ninja developer.
      </p>
      <button className="btn">
          <b>Awesome!</b>
      </button>
  </section>
        </div>;
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
