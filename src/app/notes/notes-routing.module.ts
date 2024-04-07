import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewNoteComponent } from './new-note/new-note.component';

const routes: Routes = [
    {
        path: 'new-note',
        component: NewNoteComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotesRoutingModule {}
