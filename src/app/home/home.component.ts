import { Component, OnInit } from '@angular/core';
import { Note } from '../types/Note';
import { NotesService } from '../notes/notes.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	notesList: Note[] = [];

	constructor(private notesService: NotesService) {}

	ngOnInit(): void {
		this.notesService.getByPrivacy('public').subscribe(res => {
			this.notesList = res.map(i => {
				const id = i.payload.doc.id;
				const currNote = i.payload.doc.data() as {title: string, privacy: string, text: string}
				return {id, ...currNote} as Note
			})
		})
	}
}
