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
    userJSON: string = localStorage.getItem('user') as string
    ownerId: string = ''
    constructor(private notesService: NotesService, private router: Router) {
        this.ownerId = JSON.parse(this.userJSON).uid;
    }

    handleCreateNote(form: NgForm) {
        if (form.invalid) {
            return;
        }
        try {
            this.notesService.createNote({ownerId: this.ownerId,...form.value});
            this.router.navigate(['/']);
        } catch (err) {
            console.error(err);
        }
    }
}
