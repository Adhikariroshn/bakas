import { useState } from 'react';
function Fruit() {
    let [fruit, setFruit] = useState("Apple");
    let [color, setColor] = useState("Red");
    let [price, setPrice] = useState(10);
    let [quantity, setQuantity] = useState(1);
    let [total, setTotal] = useState(0);
    let [isFruit, setIsFruit] = useState(true);
    let [isColor, setIsColor] = useState(true);
    return (
        <div>
            <h1>Fruit</h1>
            <p>Fruit: {fruit}</p>
            <p>Color: {color}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: {total}</p>
            <p>Is Fruit: {isFruit}</p>
            <p>Is Color: {isColor}</p>
            <button onClick={() => setFruit("Banana")}>Change Fruit</button>
            <button onClick={() => setColor("Yellow")}>Change Color</button>
            <button onClick={() => setPrice(20)}>Change Price</button>
            <button onClick={() => setQuantity(2)}>Change Quantity</button>
            <button onClick={() => setTotal(total + 1)}>Change Total</button>
            <button onClick={() => setIsFruit(false)}>Change Is Fruit</button>
            <button onClick={() => setIsColor(false)}>Change Is Color</button>
            <button onClick={() => setFruit("Apple")}>Change Fruit</button>
            <button onClick={() => setColor("Red")}>Change Color</button>
            <button onClick={() => setPrice(10)}>Change Price</button>
            <button onClick={() => setQuantity(1)}>Change Quantity</button>
            <button onClick={() => setTotal(0)}>Change Total</button>
            <button onClick={() => setIsFruit(true)}>Change Is Fruit</button>
            <button onClick={() => setIsColor(true)}>Change Is Color</button>
            
        </div>
    )
}

export default Fruit;