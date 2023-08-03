import axios from "axios";

function foods() {

    const token = localStorage.getItem('token');
    if(!token) {
        throw new Error('Error al obtener el token')
    }

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios.get('http://localhost:8080/products')
        .then(response => {
            const data = response.data;
            console.log(data); // Mostrar los datos en la consola

            return data; // Devolver los datos si los necesitas en otro lugar del código
        })
        .catch(error => {
            console.error('Error al obtener los datos de la API:', error);
            throw error; 
        });
}

export { foods };