const creatBtnEl = document.getElementById("btn");
const body = document.querySelector("body");

function saveNotes() {
  const allNotes = [];
  document.querySelectorAll(".note p").forEach((noteEl) => {
    allNotes.push(noteEl.textContent);
  });
  localStorage.setItem("notes", JSON.stringify(allNotes));
}

function createNote() {
  const note = document.createElement("div");
  note.className = "note";
  body.append(note);

  const noteText = document.createElement("p");
  noteText.className = ".note-text";
  noteText.textContent = "Your note";
  const input = document.createElement("input");
  input.className = "input";
  input.value = noteText.textContent;
  const noteButtons = document.createElement("div");
  noteButtons.className = "note-buttons";
  note.append(noteText, input, noteButtons);

  const submit = document.createElement("button");
  submit.className = "note-btn submit";
  submit.textContent = "submit";
  const edit = document.createElement("button");
  edit.className = "note-btn";
  edit.innerHTML = `<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0858 5.5C14.8668 4.71895 16.1332 4.71895 16.9142 5.5L18.5 7.08579C19.281 7.86684 19.281 9.13317 18.5 9.91422L9.41421 19H5V14.5858L14.0858 5.5ZM7 15.4142V17H8.58579L17.0858 8.5L15.5 6.91421L7 15.4142Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.1464 10.8536L13.1464 7.85355L13.8536 7.14645L16.8536 10.1464L16.1464 10.8536Z"
              fill="black"
            />
          </svg>
`;
  const delet = document.createElement("button");
  delet.className = "note-btn";
  delet.innerHTML = `<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 6H19V8H18V18.75C18 19.4404 17.4404 20 16.75 20H7.25C6.55965 20 6 19.4404 6 18.75V8H5V6ZM8 8V18H16V8H8Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 5H9V3H15V5Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 17V9H11V17H10ZM13 17V9H14V17H13Z"
              fill="black"
            />
          </svg>
`;
  noteButtons.append(submit, edit, delet);

  edit.style.display = "none";
  delet.style.display = "none";
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    noteText.textContent = input.value;
    input.style.display = "none";
    submit.style.display = "none";
    edit.style.display = "inline";
    delet.style.display = "inline";
    saveNotes();
  });

  edit.addEventListener("click", (e) => {
    e.preventDefault();
    input.style.display = "block";
    submit.style.display = "inline";
    edit.style.display = "none";
    delet.style.display = "none";
    saveNotes();
  });

  delet.addEventListener("click", (e) => {
    e.preventDefault();
    note.remove();
    saveNotes();
  });
}

creatBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  createNote();
  saveNotes();
});

const localStorageNotes = JSON.parse(localStorage.getItem("notes"));
localStorageNotes.forEach((n) => {
  const note = document.createElement("div");
  note.className = "note";
  body.append(note);

  const noteText = document.createElement("p");
  noteText.className = ".note-text";
  noteText.textContent = n;
  const input = document.createElement("input");
  input.className = "input";
  input.value = noteText.textContent;
  input.style.display = "none";
  const noteButtons = document.createElement("div");
  noteButtons.className = "note-buttons";
  note.append(noteText, input, noteButtons);

  const submit = document.createElement("button");
  submit.className = "note-btn submit";
  submit.textContent = "submit";
  submit.style.display = "none";
  const edit = document.createElement("button");
  edit.className = "note-btn";
  edit.innerHTML = `<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0858 5.5C14.8668 4.71895 16.1332 4.71895 16.9142 5.5L18.5 7.08579C19.281 7.86684 19.281 9.13317 18.5 9.91422L9.41421 19H5V14.5858L14.0858 5.5ZM7 15.4142V17H8.58579L17.0858 8.5L15.5 6.91421L7 15.4142Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.1464 10.8536L13.1464 7.85355L13.8536 7.14645L16.8536 10.1464L16.1464 10.8536Z"
              fill="black"
            />
          </svg>
`;
  const delet = document.createElement("button");
  delet.className = "note-btn";
  delet.innerHTML = `<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 6H19V8H18V18.75C18 19.4404 17.4404 20 16.75 20H7.25C6.55965 20 6 19.4404 6 18.75V8H5V6ZM8 8V18H16V8H8Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 5H9V3H15V5Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 17V9H11V17H10ZM13 17V9H14V17H13Z"
              fill="black"
            />
          </svg>
`;
  noteButtons.append(submit, edit, delet);

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    noteText.textContent = input.value;
    input.style.display = "none";
    submit.style.display = "none";
    edit.style.display = "inline";
    delet.style.display = "inline";
    saveNotes();
  });

  edit.addEventListener("click", (e) => {
    e.preventDefault();
    input.style.display = "block";
    submit.style.display = "inline";
    edit.style.display = "none";
    delet.style.display = "none";
    saveNotes();
  });

  delet.addEventListener("click", (e) => {
    e.preventDefault();
    note.remove();
    saveNotes();
  });
});
