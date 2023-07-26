import Choices from 'choices.js';

var choiceElements = document.querySelectorAll('#choice-js');
choiceElements.forEach((element) => {
    new Choices(element, {
        allowHTML: true,
        shouldSort: false,
    });
});
