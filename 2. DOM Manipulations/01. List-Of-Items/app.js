function addItem() {
    let input = document.getElementById('newItemText').value;
    let list = document.getElementById('items');
    let newListItem = document.createElement('li');
    newListItem.textContent = input;
    list.appendChild(newListItem);
}