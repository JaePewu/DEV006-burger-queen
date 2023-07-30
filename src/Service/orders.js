import axios from "axios";

function foods() {
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