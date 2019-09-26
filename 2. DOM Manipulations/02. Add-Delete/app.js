function addItem() {
    let input = document.getElementById('newText');
    let list = document.getElementById('items');
    let newListItem = createElement('li', input.value + " ");
    let aAttributes = { name: 'href', value: '#' };
    let aEvent = { type: 'click', func: deleteItem };
    let deleteLink = createElement('a', '[Delete]', aAttributes, aEvent);
    appendChilds(newListItem, [deleteLink])
    appendChilds(list, [newListItem]);
    
    input.value = ''

    function createElement(tagElement, text, attr, eListener) {
        let element = document.createElement(tagElement);
        element.textContent = text;
        if(attr) element.setAttribute(attr.name, attr.value);
        if(eListener) element.addEventListener(eListener.type, eListener.func)
        return element;
    }

    function appendChilds(parent, childs) {
        childs.forEach((child) => parent.appendChild(child));
    }

    function deleteItem (ev) {
        list.removeChild(ev.target.parentNode);
    }
}