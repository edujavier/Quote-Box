

import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from "./assets/quotes.json"
function App() {
  console.log(quotes);
  
  
 
  return (
    <div className="App" >
       <div className="card">
       <QuoteBox />  
       </div>
        
    </div>
  )
}

export default App
