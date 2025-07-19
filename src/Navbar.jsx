import { useState } from "react";
function Navbar(){
    const [count, setCount] = useState(0);
    const handleClick = () =>{
        setCount(count + 1);
        if(count >= 10){
            alert("Maximum limit reached"); 
            setCount(10);
        }
        else{
            setCount(count + 1);
        }
    }


    const handleReset=()=>{
        setCount(0);
    }
    const handleDecrement=()=>{
        if(count > 0){
        setCount(count - 1);
        }
        else{
            alert("Count cannot be negative");
        }
    }
    return(
        <>
        <h1>
            This is a counter {count}</h1>
           
            <button onClick={handleClick}>Lets Count</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>

    )
}
export default Navbar;