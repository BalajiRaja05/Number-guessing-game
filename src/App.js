import { useState } from 'react';
import './App.css';
import Result from './Result';
const secretNum = Math.floor(Math.random()*10)+1; ;


function App() {
  const [term, setTerm] = useState(" ")

   const handleChange=(e)=>{
      
      setTerm(e.target.value)
      
   }
  return (
    <div className="container">
       <div className='head'>
            <label htmlFor='term'>Guess the number 1 to 10 Ans:{secretNum}</label>
       </div>
       <input
            type="text"
            id="term"
            name="term"
            onChange={handleChange}
       />
       <Result  term={term} secretNum={secretNum}/>
    </div>
  );
}

export default App;
