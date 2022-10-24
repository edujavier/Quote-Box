

import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from "./assets/quotes.json"
function App() {
  console.log(quotes);
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
  return (
    <div className="App" style={{color: colors[colorIndex]}}>
       <div className="card">
       <QuoteBox styleColor={colors[colorIndex]}/>  
       </div>
        
    </div>
  )
}

export default App
