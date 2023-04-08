import "./App.css"
import React from "react";
import QuoteRender from "./QuoteRender";
import { useEffect, useState } from "react";

function App() {
  const [quoteRandom, setQuoteRandom] = useState([])
  // const [QuoteAuthor, setQuoteAuthor] = useState([]);
  useEffect(() => {
    fetch('https://api.quotable.io/quotes')
      .then(response => response.json())
      .then(data => setQuoteRandom(data.results));
  }, []);
  // console.log("RandomQuotes", quoteRandom);
  
  const handleClick = () => {
    fetch('https://api.quotable.io/quotes')
      .then(response => response.json())
      .then(data => setQuoteRandom(data.results[Math.floor(Math.random()*data.results.length)]));
  };

  return (
    <div className="App">
      <h1 className="h1">Random Quotes Generator</h1>
      <div className="quotes-render">
        <QuoteRender  title={quoteRandom.content} author={quoteRandom.author} />
      </div>
      <button className="button" onClick={handleClick} >Next</button>
    </div>
  )
}
export default App;


