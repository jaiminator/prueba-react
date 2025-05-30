import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Contador from './components/Contador'
import Human from './components/Human'
import ExampleColor from './components/ExampleColor'
import InputValidation from './components/InputValidation'
import UserRegister from './components/UserRegister'
import UserList from './components/UserList'

function App() {

  /*

  EJERCICIO: crear un nuevo componente llamado 'UserList'.
  Agregar la ruta y el link.
  Hacer fetch a la API:
  https://jsonplaceholder.typicode.com/users
  En el componente 'UserList' renderizar
  name - email - company de cada usuario.
  Se pueden añadir estilos.

  BONUS: Implementar búsqueda local de usuarios

  */

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contador' element={<Contador />} />
            <Route path='/human' element={<Human />} />
            <Route path='/exampleColor' element={<ExampleColor />} />
            <Route path='/inputValidation' element={<InputValidation />} />
            <Route path='/userRegister' element={<UserRegister />} />
            <Route path='/users' element={<UserList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
