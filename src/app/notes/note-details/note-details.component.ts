import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/types/Note';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
	note: Note = {} as Note
	constructor(private notesService: NotesService, private route: ActivatedRoute ) {
	}
	ngOnInit(): void {
		this.notesService.get(this.route.snapshot.params['id']).subscribe(res => {
			this.note = res.payload.data() as Note
			console.log(this.note)
		});
	}
}
