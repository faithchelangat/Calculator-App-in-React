import React, {useState} from 'react';

const Calculator=() =>{
    const [num1, setFirstNUm]=useState(2);
    const Add=() =>{
     
    };
    const Divide=() =>{
        return Math.floor(Math.random()*1);
    };
    const Subtract=() =>{
        return(
            <h1></h1>
        )
    };
    const Multiply=() =>{
     
    };
return(
    <div>
    <button >➗</button>
    <button>✖</button>
    <button>➖</button>
    <button>➕</button>
    <button>0️⃣</button>
    <button>1️⃣</button>
    <h1>{num1}</h1>
    <button onClick={() => setFirstNUm(num1+1)}>click2️⃣</button>
    <button>3️⃣</button>
    <button>4️⃣</button>
    <button>5️⃣</button>
    <button>6️⃣</button>
    <button>7️⃣</button>
    <button>8️⃣</button>
    <button>9️⃣</button>
    </div>
);
}
export default Calculator