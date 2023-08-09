import axios from "axios";

function ordersKitchen(option, setError) {
    return axios.get('http://localhost:8080/orders')
    .then(response => {
        const data = response.data;
        console.log(data); // Mostrar los datos en la consola

        return data.orders; // Devolver los datos si los necesitas en otro lugar del código
    })
    .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
        throw error; 
    });
}


ordersKitchen()
    .then(orders => {
        // Aquí puedes trabajar con las órdenes obtenidas, como mostrarlas en la interfaz de tu aplicación
        console.log(orders);
        // Por ejemplo, puedes recorrer las órdenes y mostrar sus detalles
        const ordersDetails = orders.map(order => ({
            id: order.id,
            client: order.client,
            products: order.products,
            status: order.status,
            orderDateEntry: order.orderDateEntry
        }));
        console.log(ordersDetails)
    })
    .catch(error => {
        // Manejo de errores
        console.error('Error al obtener órdenes:', error);
    });


    export { ordersKitchen};