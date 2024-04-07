import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-new-note',
    templateUrl: './new-note.component.html',
    styleUrls: ['./new-note.component.css'],
})
export class NewNoteComponent {
    handleCreateNote(form: NgForm) {
		console.log(form.value)
	}
}
