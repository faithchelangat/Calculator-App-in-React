import {changeEvent, useState} from "react";

const Test=()=>{
        const [num, setNum]=useState(0);
        const randomNumberInRange =() =>{
            return Math.floor(Math.random() *5);
        };

        const handleClick =() =>{
                setNum(randomNumberInRange);

            
        };
       
        return(
            <div className="wrapper">
                <h5>Click on the button below to view the answer</h5>
                <button onClick={handleClick} >Click here</button>
                <h2>The answer is: {num}</h2>
            </div>
        );
};
export default Test