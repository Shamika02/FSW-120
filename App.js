import React, {useState} from 'react';
import './App.css';

export default function App(){
 const[num1Val, setnum1Val] = useState(11);
 const[num2Val, setnum2Val] = useState(24);
 const[num3Val, setnum3Val] = useState(19);
 const[num4Val, setnum4Val] = useState(2);
 const[num5Val, setnum5Val] = useState(13);
 const[num6Val, setnum6Val] = useState(20);
 const [randomNum,setRandomNum] = useState(6);


 function handleRandomNum() {
    setRandomNum(Math.floor(Math.random() * (num6Val - num1Val + 1) + num1Val));
  }
 
         return(
             <div className="dice">
               <div className="container">
                 <div className="randomNum">
            <p>
              Random number <span>{randomNum}</span>
            </p>
            </div>
           <div className="numContainer">
           </div>
           <p>num1:</p>
            <input type="number" value= {num1Val} onChange={e => setnum1Val(+ e.target.value)}
            />
            <p>num2:</p>
            <input type="number"value= {num2Val} onChange={e => setnum2Val(+ e.target.value)}
            />
            <p>num3:</p>
            <input type="number"value= {num3Val} onChange={e => setnum3Val(+ e.target.value)}
            />
            <p>num4:</p>
            <input type="number"value= {num4Val} onChange={e => setnum4Val(+ e.target.value)}
            />
            <p>num5:</p>
            <input type="number"value= {num5Val} onChange={e => setnum5Val(+ e.target.value)}
            /> 
            <p>num6:</p>
            <input type="number"value= {num6Val} onChange={e => setnum6Val(+ e.target.value)}
            />
            <button onClick= {handleRandomNum}> Generate Random Number</button>
            </div>
        </div>
         )
         }