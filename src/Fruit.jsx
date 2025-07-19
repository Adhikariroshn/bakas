import {useState} from "react";
function Fruit() {
  const [fruit, setFruit] = useState("None");
  
  const handleChange = (e) =>{
    setFruit(e.target.value);
  }
  
  const handleClick = () => {
    alert(`You clicked! Current fruit: ${fruit}`);
  }
  
  const handleReset = () => {
    setFruit("None");
  }
  
  return(<>

      <h1>Fruit Selector</h1>
      <input type="text" value={fruit} onChange={handleChange} /> 
      <p>You selected: {fruit}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleReset}>Reset</button>
 </>
  )
}

export default Fruit;