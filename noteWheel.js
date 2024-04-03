class NoteWheel {

    constructor(_containerId, _accent_array, noteCount = 8) {
        this.container = document.getElementById(_containerId);
        this.accent_array = _accent_array;
        this.drawNotes();
    }

    updateArray(_accent_array) { 
        console.log(_accent_array);
        this.accent_array = _accent_array;
        this.drawNotes();
    }

    drawNotes() {

        const radius = 80; // Distance from center to each note

        for (let i = 0; i < this.accent_array.length; i++) {

            const noteElement = document.createElement('div');
            noteElement.className = 'note';
            const angle = (i / this.accent_array.length) * 2 * Math.PI;
            const x = radius * Math.cos(angle) + 100 - 15; // Adjusted for container and note size
            const y = radius * Math.sin(angle) + 100 - 15;
            noteElement.style.left = `${x}px`;
            noteElement.style.top = `${y}px`;

            noteElement.addEventListener('click', () => {
                this.toggleNoteAtIndex(i);
                noteElement.classList.remove('on1', 'on2');
                switch (this.accent_array[i]) {
                    case 1:
                        console.log(1);
                        noteElement.classList.add('on1');
                        break;
                    case 2:
                        console.log(2);
                        noteElement.classList.add('on2');
                        break;
                }
      
            });

            this.container.appendChild(noteElement);
        }
    }

    toggleNoteAtIndex(index) {
        if (index >= 0 && index < this.accent_array.length) {
            this.accent_array[index] = (this.accent_array[index] + 1) % 3;
        }
    }
}

export default NoteWheel;