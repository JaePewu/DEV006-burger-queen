import Swal from 'sweetalert';


function AlertBtnSendOrder() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'PEDIDO ENVIADO A COCINA!',
        showConfirmButton: false,
        timer: 1500
    });
}

export { AlertBtnSendOrder };