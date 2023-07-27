import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

document.getElementById('notifyTopLeft').addEventListener('click', function () {
    const notyf = new Notyf({
        position: {
            x: 'left',
            y: 'top',
        },
        types: [
            {
                type: 'info',
                background: '#0948B3',
                icon: {
                    className: 'fas fa-info-circle',
                    tagName: 'span',
                    color: '#fff',
                },
                dismissible: false,
            },
        ],
    });
    notyf.open({
        type: 'info',
        message: 'Send us <b>an email</b> to get support',
    });
});

document
    .getElementById('notifyTopRight')
    .addEventListener('click', function () {
        const notyf = new Notyf({
            position: {
                x: 'right',
                y: 'top',
            },
            types: [
                {
                    type: 'error',
                    background: '#FA5252',
                    icon: {
                        className: 'fas fa-times',
                        tagName: 'span',
                        color: '#fff',
                    },
                    dismissible: false,
                },
            ],
        });
        notyf.open({
            type: 'error',
            message: 'This action is not allowed.',
        });
    });

document
    .getElementById('notifyBottomLeft')
    .addEventListener('click', function () {
        const notyf = new Notyf({
            position: {
                x: 'left',
                y: 'bottom',
            },
            types: [
                {
                    type: 'warning',
                    background: '#F5B759',
                    icon: {
                        className: 'fas fa-exclamation-triangle',
                        tagName: 'span',
                        color: '#fff',
                    },
                    dismissible: false,
                },
            ],
        });
        notyf.open({
            type: 'warning',
            message: 'This might be dangerous.',
        });
    });

document
    .getElementById('notifyBottomRight')
    .addEventListener('click', function () {
        const notyf = new Notyf({
            position: {
                x: 'right',
                y: 'bottom',
            },
            types: [
                {
                    type: 'info',
                    background: '#262B40',
                    icon: {
                        className: 'fas fa-comment-dots',
                        tagName: 'span',
                        color: '#fff',
                    },
                    dismissible: false,
                },
            ],
        });
        notyf.open({
            type: 'info',
            message: 'John Garreth: Are you ready for the presentation?',
        });
    });
