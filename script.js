let $ = document;
let colorBoxes = $.querySelectorAll(`.colorBox`);
let input = $.querySelector(`.input`);
let add = $.querySelector(`.add`);
let erase = $.querySelector(`.erase`);
let noteContainer = $.querySelector(`.noteContainer`);

colorBoxes.forEach((box) => {
  box.addEventListener(`click`, (click) => {
    let bg = click.target.style.backgroundColor;
    input.style.backgroundColor = bg;
    input.focus();
  });
});

// add note
function addNote() {
  let nowNote = $.createElement(`div`);
  nowNote.className = `note w-3/12 h-20 flex justify-center items-center border-2 border-gray-400 rounded-lg m-3`;
  nowNote.style.backgroundColor = input.style.backgroundColor;
  input.style.backgroundColor = `#fff`;
  nowNote.innerHTML = input.value;
  input.value = ``;
  noteContainer.append(nowNote);
  nowNote.addEventListener(`click`, (click) => {
    click.target.remove();
  });
  input.focus();
}
input.addEventListener(`keyup`, (key) => {
  if (key.keyCode == 13) {
    addNote();
  }
});
add.addEventListener(`click`, () => {
  addNote();
});

// delete note

erase.addEventListener(`click`, () => {
  input.value = ``;
  input.focus();
});
