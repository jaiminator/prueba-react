import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Formulario de registro básico de un usuario
// que al completarse los datos se guarden en
// el localStorage dentro de un objeto 'user'
// BONUS: que te envíe al componente 'Home' usando useNavigate()

const UserRegister = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameChange = (event) => {
        setUsername(event.target.value);
    };
    const passwordChange = (event) => {
        setPassword(event.target.value);
    };

    const sendRegister = () => {

        const user = {
            username: username,
            password: password
        }

        localStorage.setItem("user", JSON.stringify(user));
        navigate('/');

    }

  return (

    <>
        <input onChange={usernameChange} type="text" placeholder="Username..."/><br />
        <input onChange={passwordChange} type="password" placeholder="Password..."/><br />
        <button onClick={sendRegister}>Register</button>
    </>

  )
}

export default UserRegister