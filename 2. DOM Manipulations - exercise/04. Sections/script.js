function create(words) {
   const SELECTORS = {
      parentDiv: '#content'
   }
   const NEW_ELEMENTS = {
      paragraph: 'p',
      childDiv: 'div'
   }
   const showParagraph = function (ev) {
      ev.target.firstElementChild.style.display = 'block';
   }
   const createDiv = function (el, index) {
      let newDiv = document.createElement(NEW_ELEMENTS.childDiv);
      let newParagraph = document.createElement(NEW_ELEMENTS.paragraph);
      newParagraph.textContent = el;
      newParagraph.style.display = 'none';
      newDiv.appendChild(newParagraph)
      document.querySelector(SELECTORS.parentDiv).appendChild(newDiv);
      newDiv.addEventListener('click', showParagraph)
   }

   words.forEach(createDiv)
}