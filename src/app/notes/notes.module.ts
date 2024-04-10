import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewNoteComponent } from './new-note/new-note.component';
import { NotesRoutingModule } from './notes-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NoteDetailsComponent } from './note-details/note-details.component';

@NgModule({
    declarations: [NewNoteComponent, NoteDetailsComponent],
    imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule],
	exports: [NotesRoutingModule]
})
export class NotesModule {}
