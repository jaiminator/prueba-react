import { useState } from "react";

const Contador = () => {
    const [counter, setCounter] = useState(0);
    const [otroCounter, setOtroCounter] = useState(100);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setOtroCounter(otroCounter - 1);

    return (
        <>
            <h2 onClick={increment}>Mi componente: {counter}</h2>
            {counter % 2 == 0 ? "Es par": "Es impar"}
            <h2 onClick={decrement}>Mi otro componente: {otroCounter}</h2>
            {otroCounter % 2 == 0 ? "Es par": "Es impar"}
        </>
    )
    
}

export default Contador;