import './App.css'
import Contador from './components/Contador';
import Titulito from './components/Titulito';
import Human from './components/Human';
import { useState } from 'react';

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

  return (
    <>
      <button onClick={() => setView(<Titulito title="Welcome" />)}>Inicio</button>
      <button onClick={() => setView(humansArray.map((humanElem) => <Human humanProp={humanElem}/>))}>Humano</button>
      
      <div>{view}</div>
    </>
  )
}

export default App
