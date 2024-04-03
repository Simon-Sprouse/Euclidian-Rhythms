class NoteWheel {
    constructor(containerId, noteCount = 8) {
      this.container = document.getElementById(containerId);
      this.notes = new Array(noteCount).fill(false);
      this.drawNotes();
    }

    drawNotes() {
      const radius = 80; // Distance from center to each note
      for (let i = 0; i < this.notes.length; i++) {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        const angle = (i / this.notes.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle) + 100 - 15; // Adjusted for container and note size
        const y = radius * Math.sin(angle) + 100 - 15;
        noteElement.style.left = `${x}px`;
        noteElement.style.top = `${y}px`;
        noteElement.addEventListener('click', () => {
          this.toggleNoteAtIndex(i);
          noteElement.classList.toggle('on', this.notes[i]);
        });
        this.container.appendChild(noteElement);
      }
    }

    toggleNoteAtIndex(index) {
      if (index >= 0 && index < this.notes.length) {
        this.notes[index] = !this.notes[index];
      }
    }
  }

export default NoteWheel;