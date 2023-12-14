import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hello, I use React</h2>
      <label htmlFor="input">html</label>
      <input type="radio" id="html" name="language" value="HTML"></input>
      <a href="https://en.wikipedia.org/wiki/Pterophyllum">Angelfish</a>
    </article>
  );
}
