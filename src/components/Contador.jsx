import { useEffect, useState } from "react"; /* Importamos métodos useEffect y useState */

const Contador = () => {
    //Sacamos el valor del almacenamiento local de 'number'
    const getNumSaved = localStorage.getItem("number");

    //Declaramos la variable de estado 'counter' con el valor del localStorage
    const [counter, setCounter] = useState(Number(getNumSaved));
    
    //Funciones para incrementar o disminuir el contador
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    //Lógica cada vez que montemos el componente
    useEffect(() => {
        if (!Number(getNumSaved)) {
            setCounter(0);
        } else {
            setCounter(Number(getNumSaved));
        }
    }, [])

    //Lógica cada vez que cambia el estado 'counter'
    useEffect(() => {
        localStorage.setItem("number", counter);
    }, [counter])
    
    return (
        <>
            <h2>Counter: {counter}</h2> {/* Muestra la variable de estado 'counter' por pantalla */}
            <button style={padding = '10px'} onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
    
}

export default Contador; //Exportamos el componente