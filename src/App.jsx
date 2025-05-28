import './App.css'
import Contador from './components/Contador';
import Titulito from './components/Titulito';
import Human from './components/Human';
import { useState, useEffect } from 'react';
import InputValidation from './components/InputValidation';

function App() {

  // EJERCICIO 
  // Botones: Inicio - Humano
  // Hacer click en Inicio: muestra Titulito
  // Hacer click en Humano: muestra humanos

  const humansArray = [
        {name: "Nico", planet: "Earth", image: "https://photojournal.jpl.nasa.gov/browse/PIA00114.gif"},
        {name: "Jorge", planet: "Mars", image: "https://styles.redditmedia.com/t5_2qku9/styles/communityIcon_z5gbxg4feoe31.jpg?format=pjpg&s=69cb64628c9f8ee4d2496c4c432a800f59a4bb55"},
        {name: "Felipe", planet: "Neptune", image: "https://b.thumbs.redditmedia.com/9KPMHfkLV9M3LRTGllY2IYf3vA3lpK8hiyblPFB4Fik.png"},
    ];

  const [view, setView] = useState("");

  const Example = () => {

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

  
  return (
    <>
      <button onClick={() => setView("contador")}>Contador</button>
      <button onClick={() => setView("humano")}>Humano</button>
      <button onClick={() => setView("useEffect")}>Ejemplo useEffect</button>
      
      {view == "contador" && <Contador />}
      {view == "humano" && humansArray.map((humanElem) => <Human humanProp={humanElem}/>)}
      {view == "useEffect" && <Example />}

      <br /><br />
      <InputValidation />

    </>
  )
}

export default App
