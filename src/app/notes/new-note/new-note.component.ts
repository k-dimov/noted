import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
    selector: 'app-new-note',
    templateUrl: './new-note.component.html',
    styleUrls: ['./new-note.component.css'],
})
export class NewNoteComponent {

    constructor(private notesService: NotesService) {
    }

    handleCreateNote(form: NgForm) {
		if (form.invalid) {
            return;
        }
        this.notesService.createNote(form.value)
	}
}
