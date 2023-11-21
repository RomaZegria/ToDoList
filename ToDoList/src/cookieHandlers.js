import { btn, formInp } from "./index.js";
import { btnChanger } from "./utilities.js";
import { displayNotes } from "./render.js";

function updateCookies() {
  const cookie = document.cookie.split(";");
  if (cookie[0] === "") return displayNotes(null);
  let cookies = [];
  cookie.forEach((item) => {
    let cookieData = item.split("=");
    let cookiesObj = JSON.parse(cookieData[1]);
    cookies.push(cookiesObj);
  });

  displayNotes(cookies);
}

function createNote(str, noteKey = Date.now().toString(), condition = false) {
  const expiresDate = new Date();
  expiresDate.setMonth(expiresDate.getMonth() + 1);
  const newNote = {
    key: noteKey,
    state: condition,
    note: str,
  };

  const newNoteJson = JSON.stringify(newNote);
  document.cookie = `${
    newNote.key
  }=${newNoteJson}; expires=${expiresDate.toUTCString()}; path=/`;
  updateCookies();
}

function deleteCookie(key) {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  updateCookies();
}

function deleteAllCookies() {
  let cookies = document.cookie.split(";");
  cookies.forEach((item) => {
    let noteKey = item.split("=")[0];
    document.cookie = `${noteKey}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
  displayNotes(null);
}

function stateNote(stateTool, note, key) {
  if (stateTool.checked) {
    createNote(note, key, true);
  } else {
    createNote(note, key, false);
  }
}

function editNote(note, key) {
  formInp.value = note.trim();
  btnChanger("button", "Change", "#FFA500");

  function editBtn() {
    createNote(formInp.value, key);
    form.reset();
    btnChanger("submit", "Add", "#00c55a");
    btn.removeEventListener("click", editBtn);
  }

  btn.addEventListener("click", editBtn);
}

export {
  deleteCookie,
  stateNote,
  editNote,
  deleteAllCookies,
  createNote,
  updateCookies,
};
