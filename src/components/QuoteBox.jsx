import React, { useState } from 'react';
import quotes from "../assets/quotes.json"
import Button from './Button';


const QuoteBox = () => {
  const colors = [
    '#CB4707',
    '#B99C3D',
    '#E7B1AC',
    '#BE783A',
    '#6E24F3',
    '#780DD8'
  ];
  
    const colorIndex = Math.floor(Math.random()*colors.length);
    document.body.style = `background: ${colors[colorIndex]}`;
  console.log(quotes);
  
  const randomIndex = Math.floor(Math.random()*quotes.length);
  const[index, setIndex] = useState(randomIndex);
  const changeWord = () => {
    const randomIndex2 = Math.floor(Math.random()*quotes.length);
    setIndex(randomIndex2);
  }
  return (
    <div style={{color: colors[colorIndex]}} >
      <h2 >
      <i class="fa-solid fa-quote-left"></i>
      {quotes[index].quote}</h2>
      <p>{quotes[index].author}</p>
      <div className="button">
      <Button changeWord={changeWord} />
      </div>
      
      
    </div>
  );
};

export default QuoteBox;