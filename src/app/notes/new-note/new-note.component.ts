import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-note',
    templateUrl: './new-note.component.html',
    styleUrls: ['./new-note.component.css'],
})
export class NewNoteComponent {
    constructor(private notesService: NotesService, private router: Router) {}

    handleCreateNote(form: NgForm) {
        if (form.invalid) {
            return;
        }
        try {
            this.notesService.createNote(form.value);
            this.router.navigate(['/']);
        } catch (err) {
            console.error(err);
        }
    }
}
