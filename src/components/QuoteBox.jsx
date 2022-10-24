import React, { useState } from 'react';
import quotes from "../assets/quotes.json"
import Button from './Button';


const QuoteBox = (styleColor) => {
 
  console.log(quotes);
  const randomIndex = Math.floor(Math.random()*quotes.length);
  const[index, setIndex] = useState(randomIndex);
  const changeWord = () => {
    const randomIndex2 = Math.floor(Math.random()*quotes.length);
    setIndex(randomIndex2);
  }
  return (
    <div>
      <h2 >
      <i class="fa-solid fa-quote-left"></i>
      {quotes[index].quote}</h2>
      <p>{quotes[index].author}</p>
      <div className="button">
      <Button styleColor={styleColor} changeWord={changeWord}/>
      </div>
      
      
    </div>
  );
};

export default QuoteBox;