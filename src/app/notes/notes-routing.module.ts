import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewNoteComponent } from './new-note/new-note.component';
import { HomeComponent } from '../home/home.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { AuthLoggedActivate } from '../shared/guards/authLogged.activate';
import { MyNotesComponent } from './my-notes/my-notes.component';

const routes: Routes = [
    {
        path: 'notes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomeComponent,
            },
            {
                path: 'new-note',
                component: NewNoteComponent,
                canActivate: [AuthLoggedActivate],
            },
            {
                path: ':id',
                component: NoteDetailsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotesRoutingModule {}
