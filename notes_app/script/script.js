const input = document.querySelector('.notes-input-form');
const output = document.querySelector('.notes-output');
const form = document.querySelector('.notes-input-form');

const notes = {
  notesList: [],
  add(text) {
    const note = {
      id: Date.now(),
      text,
    };

    this.notesList.push(note);
    return note;
  },
  delete(id) {
    this.notesList = this.notesList.filter(note => note.id !== id);
  },
};

form.addEventListener('submit', handleFormSubmit);
output.addEventListener('click', handleDeleteRequest);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const text = form.elements.text.value;

  const note = notes.add(text);
  const noteMarkup = createNote(note);
  appendNote(output, noteMarkup);

  form.reset();
}

function createNote(note) {
  return `<div class="note" data-id="${note.id}">
  ${note.text} <span class="delete-btn"></span>
  </div>`;
}

function appendNote(elementsList, note) {
  elementsList.insertAdjacentHTML('beforeend', note);
}

function handleDeleteRequest(event) {
  if (event.target.nodeName !== 'SPAN') {
    return;
  }
  const deleteBtn = event.target;
  const noteElement = deleteBtn.closest('.note');
  const noteId = Number(noteElement.dataset.id);
  notes.delete(noteId);
  noteElement.remove();
  console.log(notes.notesList);
}
