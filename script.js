const input = document.getElementById('noteInput');
const btn = document.getElementById('saveBtn');
const display = document.getElementById('notesDisplay');

// Load existing notes
let notes = JSON.parse(localStorage.getItem('arctic_notes')) || [];

function render() {
    display.innerHTML = notes.map((note, index) => `
        <div class="note-card">
            <p>${note}</p>
            <span class="delete-link" onclick="deleteNote(${index})">Remove</span>
        </div>
    `).join('');
    localStorage.setItem('arctic_notes', JSON.stringify(notes));
}

btn.addEventListener('click', () => {
    if (input.value.trim()) {
        notes.unshift(input.value);
        input.value = '';
        render();
    }
});

window.deleteNote = (index) => {
    notes.splice(index, 1);
    render();
};

render();