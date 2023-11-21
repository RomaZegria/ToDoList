import { field } from "./index.js";
import { updateListeners } from "./updateListeners.js";
import { arraySorting } from "./utilities.js";

function displayNotes(arr) {
  if (arr === null) {
    field.innerHTML = "";
    return;
  }
  const sortedArr = arraySorting(arr);

  const notes = sortedArr
    .map((item) => {
      const crossedOutClass = item.state
        ? "item__text-content_crossed-out"
        : "";
      const checkedAttribute = item.state ? "checked" : "";

      return `<div class="toDoList__item item">
      <div class='item__text-content ${crossedOutClass}' data-key='${item.key}'>
      ${item.note}
      </div>
      <div class="item__tools">
        <div class="item__state-tool">
          <input type="checkbox" class='item__checkbox' ${checkedAttribute}/>
          <div class="item__tool-depiction">
            Done
          </div>
        </div>
        <div class='item__edit-tool'>
          <div class='item__edit-icon'>
            &#x270E;
          </div>
          <div class="item__tool-depiction item__edit-btn">
            Edit
          </div>
        </div>
        <div class="item__delete-tool"> 
          <img src="./images/deleteTool.svg" alt="" />
          <div class="item__tool-depiction">
            Delete
          </div>
        </div>
      </div>
    </div>`;
    })
    .join("");

  field.innerHTML = notes;
  updateListeners();
}

export { displayNotes };
