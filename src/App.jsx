import Titulito from './components/Titulito'
import './App.css'

function App() {

  const titulos = ['Hola', 'Super', 'WOW', 'Siiii', 'Esto es un título'];

  return (
    <>
      <h1>Hello!</h1>
      <ul>
        {titulos.map((titulo) => <li>{titulo}</li>)}
      </ul>
      <hr></hr>
      <Titulito title="Super título"/>
    </>
  )
}

export default App
