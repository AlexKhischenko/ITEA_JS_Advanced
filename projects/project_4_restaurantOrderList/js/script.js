// 1. Navigation - done
// 2. Add event listeners - done
// 3. Add item - done
// 4. Display item - done

var itemsList = document.querySelector('.plates'),
    addItems = document.querySelector('.add-items'),
    modal = document.querySelector('.modal-wrapper'),
    modalConfirm = document.querySelector('.modal-confirm'),
    modalCancel = document.querySelector('.modal-cancel');

var items = JSON.parse(localStorage.getItem('items')) || []; /* Вытягивает данные из localStorage и Преобразует JSON в объект */

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
        itemDelete.forEach(function (remove, i) {
            if (event.target === remove) {

                // modal.classList.remove('hidden');
                // modalConfirm.addEventListener('click', function() {
                //     items.splice(i, 1);
                //     localStorage.setItem('items', JSON.stringify(items));
                //     populateList(items, itemsList);
                //     modal.classList.add('hidden');
                // });
                // modalCancel.addEventListener('click', function() {
                //     modal.classList.add('hidden');
                // });

                items.splice(i, 1);
                localStorage.setItem('items', JSON.stringify(items));
                populateList(items, itemsList);
            }
        });
    }
}

// function deleteDish() {
//     modal.classList.remove('hidden');

// }

populateList(items, itemsList);

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', chooseItem);
// modal.addEventListener('click', deleteDish);
