import axios from "axios";

function loginAPI(options, setError) {
    //El parámetro 'options' es un objeto que contiene los datos necesarios para realizar la petición POST
    //setError funcion que maneja los errores en caso de problemas en el inicio de sesión
    let token = ""; // se crea esta variable para almacenar el token

    return (
        axios
            .post("http://localhost:8080/login", options.body, options)
            //Enviamos una solucitud post de inicio de sesión, donde option.body es el cuerpo y option el resto de la peticion en este caso header.
            .then((response) => {
                // respuesta de la llamada
                if (!response.data) {
                    // si response esta vacia (Data solo trae el body)
                    throw new Error(
                        "Error al iniciar sesión. Por favor, verifica tus credenciales."
                    );
                }
                return response.data;
            })
            .then((data) => {
                // si la respuesta contiene datos y son validos va a capturar el token
                token = data.accessToken; // si la peticion es exitosa el token se guarda aquí
                localStorage.setItem("token", token); // y se guarda en el almacenamiento local
                console.log(token); //Borrar cuando se termine el proyecto
                return token;
            })
            .catch((error) => {
                console.error(error);
                setError(
                    "No hemos podido autenticar tu cuenta. Revisa tus credenciales y haz otro intento."
                );
            })
    );
}

export { loginAPI };
