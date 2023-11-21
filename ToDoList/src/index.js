import {
  deleteAllCookies,
  createNote,
  updateCookies,
} from "./cookieHandlers.js";

const form = document.getElementById("form");
const note = document.getElementById("formInput");
const field = document.getElementById("field");
const cleanItems = document.getElementById("cleanItems");
const btn = document.getElementById("formBtn");
const formInp = document.getElementById("formInput");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (note.value.trim() === "") return;
  createNote(note.value);
  form.reset();
});

cleanItems.addEventListener("click", () => {
  deleteAllCookies();
});

document.addEventListener("DOMContentLoaded", () => {
  updateCookies();
});

export { field, btn, formInp };
