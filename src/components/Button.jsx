import React, { useState } from 'react';
//import quotes from '../assets/quotes.json'
const Button = ({changeWord, styleColor}) => {
  
  
  return (
    <div>
      <button className="button" onClick={changeWord} style={{color:styleColor}}><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  );
};

export default Button;