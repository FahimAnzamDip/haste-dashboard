// SweetAlert 2
import Swal from "sweetalert2";

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-primary me-3',
        cancelButton: 'btn btn-gray',
    },
    buttonsStyling: false,
});

document.getElementById('basicAlert').addEventListener('click', function () {
    swalWithBootstrapButtons.fire('Basic alert', 'You clicked the button!');
});

document.getElementById('infoAlert').addEventListener('click', function () {
    swalWithBootstrapButtons.fire(
        'Info alert',
        'You clicked the button!',
        'info'
    );
});

document.getElementById('successAlert').addEventListener('click', function () {
    swalWithBootstrapButtons.fire({
        icon: 'success',
        title: 'Success alert',
        text: 'Your work has been saved',
        showConfirmButton: true,
        timer: 1500,
    });
});

document.getElementById('warningAlert').addEventListener('click', function () {
    swalWithBootstrapButtons.fire(
        'Warning alert',
        'You clicked the button!',
        'warning'
    );
});

document.getElementById('dangerAlert').addEventListener('click', function () {
    swalWithBootstrapButtons.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>',
    });
});

document.getElementById('questionAlert').addEventListener('click', function () {
    swalWithBootstrapButtons.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
    );
});