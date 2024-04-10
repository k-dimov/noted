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
		this.notesService.getAll().subscribe(res => {
			this.notesList = res.map(i => {
				return i.payload.doc.data() as Note
			})
		})
		
	}
}
