
const listItems = document.querySelectorAll('li');
const textFields = document.querySelectorAll('.text-field');
const buttons = document.querySelectorAll('.arrow');
const leftButton = buttons[0];
const rightButton = buttons[1];
//console.log(listItems);

listItems.forEach((listItem, i) => {
    listItem.style.order = i + 1;
});

function scrollLeft() {
    textFields.forEach(textField => {
        if (textField.style.order == 2) {
            textField.style.order = 5;
        } else {
            textField.style.order = parseInt(textField.style.order) - 1;
        }
    })
}

function scrollRight() {
    textFields.forEach(textField => {
        if (textField.style.order == 5) {
            textField.style.order = 2;
        } else {
            textField.style.order = parseInt(textField.style.order) + 1;
        }
    })
}

leftButton.addEventListener('click', scrollLeft);
rightButton.addEventListener('click', scrollRight);