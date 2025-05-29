import { useState, useEffect } from 'react'

const ExampleColor = () => {

    const [favoriteColor, setFavoriteColor] = useState('red');
    const [test, setTest] = useState(0);

    useEffect(() => {
        console.log('Se ejecuta el 1er useEffect: componente montado');
        setTimeout(() => {
        console.log('Timeout finalizado');
        setFavoriteColor("yellow");
        }, 2000);
    }, []);

    useEffect(()=>{
        console.log("El color favorito se ha actualizado");
    }, [favoriteColor])


    useEffect(()=>{
        console.log("test se ha actualizado con :", test);
    }, [test])


    return <h1 onClick={() => setTest(Math.random())}>My Favorite Color is {favoriteColor} - {test}</h1> 
}

export default ExampleColor