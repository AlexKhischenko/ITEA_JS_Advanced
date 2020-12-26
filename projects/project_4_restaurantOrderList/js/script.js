/*
1. Get all necessary DOM elements
2. Add event listener
    2.1 For the the button 'Add a dish'
    2.2 For the list of dishes
    2.3 For the modal window
3. Display function
    3.1 Display list of dishes from the localStorage
    3.2 Display checkboxes statement from the localStorage
4. Add 'Edit', 'Delete' and 'Save' buttons for each element
5. Setting functionality for each button
6. Setting functionality for modal buttons
*/

var itemsList = document.querySelector('.plates'),
    addItems = document.querySelector('.add-items'),
    modal = document.querySelector('.modal-wrapper'),
    modalConfirm = document.querySelector('.modal-confirm'),
    modalCancel = document.querySelector('.modal-cancel'),
    indexOfRemovingDish;

var items = JSON.parse(localStorage.getItem('items')) || []; /* Вытягивает данные из localStorage и Преобразует JSON в объект */

/* Get value of input, display it and save in localStorage */
function addItem(event) {
    event.preventDefault();
    var text = this.querySelector('[name=item]').value;
    var item = {
        text: text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items)); /* Отправляет данные в localStorage и Преобразует объект в JSON */
    this.reset();
}

/* Discplay list of dishes from the localStorage and checkboxes statement from the localStorage */
function populateList(plates, platesList) {
    platesList.innerHTML = plates.map(function (plate, index) {
        return `
            <li class="item-container">
                <input type="checkbox" id="item-${index}">
                <label class="item-label" for="item-${index}" contenteditable="false">${plate.text}</label>
                <div class="item-manipulation">
                    <img src="./img/edit.png" alt="edit" class="item-edit">
                    <img src="./img/save.png" alt="save" class="item-save hidden">
                    <img src="./img/delete.png" alt="delete" class="item-delete">
                </div>
            </li>
        `;
    }).join('');
    var checkboxes = platesList.querySelectorAll('input');
    plates.forEach(function (item, i) {
        checkboxes[i].checked = item.done;
    });
}

/* Setting functionality for 'Edit', 'Delete' and 'Save' buttons*/
function chooseItem(event) {
    var checkboxes = this.querySelectorAll('input'),
        itemEdit = this.querySelectorAll('.item-edit'),       
        itemSave = this.querySelectorAll('.item-save'),
        itemDelete = this.querySelectorAll('.item-delete'),
        itemLabel = this.querySelectorAll('.item-label');

    if (event.target && event.target.tagName === "INPUT") {
        checkboxes.forEach(function (input, i) {
            if (event.target === input) {
                items[i].done = input.checked;
                localStorage.setItem('items', JSON.stringify(items));
            }
        });
    }

    if (event.target && event.target.classList.contains('item-edit')) {
        itemEdit.forEach(function (edit, i) {
            if (event.target === edit) {
                checkboxes[i].disabled = true;
                itemEdit[i].classList.add('hidden');
                itemSave[i].classList.remove('hidden');
                itemLabel[i].contentEditable = 'true';
                itemLabel[i].focus();
            }
        });
    }

    if (event.target && event.target.classList.contains('item-save')) {
        itemSave.forEach(function (save, i) {
            if (event.target === save) {
                checkboxes[i].disabled = false;
                items[i].text = itemLabel[i].textContent;
                itemLabel[i].contentEditable = 'false';
                itemEdit[i].classList.remove('hidden');
                itemSave[i].classList.add('hidden');
                localStorage.setItem('items', JSON.stringify(items));
                populateList(items, itemsList);
            }
        });
    }

    if (event.target && event.target.classList.contains('item-delete')) {
        for (var i = 0; i < itemDelete.length; i += 1) {
            if (event.target === itemDelete[i]) {
                indexOfRemovingDish = i;
                modal.classList.remove('hidden');
            }
        }
    }
}

/* Setting functionality for modal buttons */
function removeDish(event) {
    if (event.target && event.target.classList.contains('modal-confirm')) {
        items.splice(indexOfRemovingDish, 1);
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
        modal.classList.add('hidden');
    }
    if (event.target && event.target.classList.contains('modal-cancel')) {
        modal.classList.add('hidden');
    }
}

/* Display data from the localStorage when user opens the page */
populateList(items, itemsList);

/* Add event listeners */
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', chooseItem);
modal.addEventListener('click', removeDish);
