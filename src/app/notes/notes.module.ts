import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewNoteComponent } from './new-note/new-note.component';
import { NotesRoutingModule } from './notes-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { MatCardModule } from '@angular/material/card';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [NewNoteComponent, NoteDetailsComponent, MyNotesComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        RouterModule,
        SharedModule,
    ],
    exports: [NotesRoutingModule],
})
export class NotesModule {}
