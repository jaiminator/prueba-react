//ENUNCIADO EL EJERCICIO:
// Si la contrasenia tiene menos de 5 caracteres
// mostrar texto de "Invalid pass"
// Si tiene mas de 5 mostrar "Valid pass-"

import { useEffect, useState } from "react"; //Importamos hooks de React

//Creamos el componente
const InputValidation = () => {

    //Declaramos estados
    const [password, setPassword] = useState("");
    const [validationMessage, setValidationMessage] = useState("");

    //Función para cambiar el estado password con el valor del input que enviamos
    const handleInputChange = (event) => {
        /* console.log("Contrasenia: ", event.target.value); */
        setPassword(event.target.value);
    };

    //Lógica a ejecutar cada vez que se actualiza el estado password
    useEffect(()=>{
        if (!password) {
            setValidationMessage('');
        } else if (password.length < 5) {
            setValidationMessage('Invalid pass');
        } else if (password.length >= 5) {
            setValidationMessage('Valid pass');
        } 
    }, [password])

    //Retornamos código HTML
    return (
        <>
            <input onChange={handleInputChange} placeholder="Ingrese password" />
            <h3 className="validationPass">{validationMessage}</h3>
        </>
    )

};

export default InputValidation; //Exportamos el componente
