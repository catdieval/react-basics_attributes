import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hello, I use React</h2>
      <label htmlFor="test">Enter some text:</label>
      <input type="text" id="test"></input>
      <br/>
      <a href="https://en.wikipedia.org/wiki/Pterophyllum" target="_blank" rel="noreferrer" className="article__link">Angelfish link on Wikipedia</a>
    </article>
  );
}
