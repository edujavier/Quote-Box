import React, { useState } from 'react';
//import quotes from '../assets/quotes.json'
const Button = ({changeWord, colors, colorIndex}) => {
  //console.log(colors[colorIndex]);
  
  return (
    <div >
      <button style={{color: colors[colorIndex]}} className="button" onClick={changeWord} ><i class="fa-solid fa-chevron-right" ></i></button>
    </div>
  );
};

export default Button;