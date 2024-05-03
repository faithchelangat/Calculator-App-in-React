import Test from './Test';
import {useState} from 'react';
const App= () =>{
  const [ans,setAns]=useState("");
  const [result, setResult]=useState("");
  const ops=["/","*","+","-","."];
  const updateCalc =value =>{
   
    if (ops.includes(value) && ans==='' ||ops.includes(value) && ops.includes(ans.toString().slice(-1)))
    {
      return;
    }
    setAns(ans+value);
    if(!ops.includes(value)){
      setResult(eval(ans+value).toString());
    }
  }
  const createDigits =()=>{
    const digits=[];
    for(let i=9 ;i>0; i--){
       digits.push(
        <button onClick={()=>updateCalc(i.toString()) }
        key={i}>{i}</button>
       )
       
    }
    
    return digits;
  }
  const calculate=()=>{
    setAns(eval(ans.toString()));
  }
  const del=()=>{
    if(ans==''){
      return;
    }
    const value=ans.toString().slice(0, -1);
    setAns(value.toString());
   
  }
  const clear=()=>{
    setAns('');
  }
  return(
    <div className="App">
      <div className="calculator">
          <div className="display">
            {result ?<span></span>:''}{ans || " "}&nbsp;&nbsp;
          </div>
          <div className="operators">
          <button onClick={clear}>©</button>
            <button onClick={()=>updateCalc("/")}>➗</button>
            <button onClick={()=>updateCalc("*")}>✖</button>
            <button onClick={()=>updateCalc("+")}>➕</button>
            <button onClick={()=>updateCalc("-")}>➖</button>


            <button onClick={del}>DEL</button>
          </div>
          <div className="digits">
            {createDigits()}
            <button onClick={()=>updateCalc("0")}>0 </button>
            <button onClick={()=>updateCalc(".")}>.</button>

            <button onClick={calculate}>=</button>
          </div>
    </div>
    </div>
  )
}
export default App;
