import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/types/Note';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-note-details',
    templateUrl: './note-details.component.html',
    styleUrls: ['./note-details.component.css'],
})
export class NoteDetailsComponent implements OnInit, OnDestroy {
    note: Note = {} as Note;
    privacy: string = '';
    isEditOpen: boolean = false;
    note$: Subscription = Subscription.EMPTY;
    constructor(
        private notesService: NotesService,
        private route: ActivatedRoute,
        private router: Router
    ) {}
    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.note$ = this.notesService.get(id).subscribe((res) => {
            this.note = res.payload.data() as Note;
            this.note.id = id;
            this.privacy = this.note.privacy;
            console.log(this.note);
        });
    }

    ngOnDestroy(): void {
        this.note$.unsubscribe();
    }

    toggleEdit() {
        this.isEditOpen = !this.isEditOpen;
    }

    handleEdit(form: NgForm) {
        this.notesService.editNote(this.note.id, form.value);
        this.toggleEdit();
    }

    handleDelete() {
        this.notesService.deleteNote(this.note.id);
        this.router.navigate(['/']);
    }
}
