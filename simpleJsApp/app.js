const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

const handleClick = () => {
    const value = inputEl.value;
    const listItem = document.createElement('li');

    listItem.textContent = value;
    listEl.appendChild(listItem);
    inputEl.value = '';
};

buttonEl.addEventListener('click', handleClick);