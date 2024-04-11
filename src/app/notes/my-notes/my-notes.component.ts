import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/types/Note';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-my-notes',
    templateUrl: './my-notes.component.html',
    styleUrls: ['./my-notes.component.css'],
})
export class MyNotesComponent implements OnInit {
    notesList: Note[] = [];
	userJSON: string = localStorage.getItem('user') as string
    ownerId: string = ''
    constructor(private notesService: NotesService, private router: Router) {
        this.ownerId = JSON.parse(this.userJSON).uid;
    }

    ngOnInit(): void {
        this.notesService.getAllById(this.ownerId).subscribe((res) => {
            this.notesList = res.map((i) => {
                const id = i.payload.doc.id;
                const currNote = i.payload.doc.data() as {
                    title: string;
                    privacy: string;
                    text: string;
                };
                return { id, ...currNote } as Note;
            });
        });
    }
}
