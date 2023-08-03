const spinnerWrapperEl = document.querySelector('.spinner_wrapper');

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 200);
})