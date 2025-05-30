import { Link } from "react-router-dom"

const Header = () => {

  const separador = {
    padding: '10px'
  }

  return (
    <nav>
      <span>
        Menu
      </span>
      <div>
        <span style={separador}>
          <Link to="/">Home</Link>
        </span>
        /
        <span style={separador}>
          <Link to="/contador">Contador</Link>
        </span>
        /
        <span style={separador}>
          <Link to="/inputValidation">Input validation</Link>
        </span>
        /
        <span style={separador}>
          <Link to="/userRegister">User register</Link>
        </span>
        /
        <span style={separador}>
          <Link to="/users">Users list</Link>
        </span>
      </div>
    </nav>
  )
}

export default Header