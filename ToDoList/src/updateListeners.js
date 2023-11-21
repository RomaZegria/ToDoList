import { deleteCookie, stateNote, editNote } from "./cookieHandlers.js";

function updateListeners() {
  const items = document.querySelectorAll(".item__tools");
  items.forEach((item) => {
    item.addEventListener("click", attachEventListeners);
  });

  function attachEventListeners(event) {
    const parent = event.currentTarget.parentElement;
    const note = parent.querySelector(".item__text-content");
    const toolClassList = event.target.parentElement.classList;

    switch (true) {
      case toolClassList.contains("item__delete-tool"):
        deleteCookie(note.dataset.key);
        break;
      case event.target.classList.contains("item__checkbox"):
        stateNote(event.target, note.textContent, note.dataset.key);
        break;
      case toolClassList.contains("item__edit-tool"):
        editNote(note.textContent, note.dataset.key);
        break;
      default:
        break;
    }
  }
}

export { updateListeners };
