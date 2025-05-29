import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Contador from './components/Contador'
import Human from './components/Human'
import ExampleColor from './components/ExampleColor'
import InputValidation from './components/InputValidation'
import UserRegister from './components/UserRegister'

function App() {

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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
