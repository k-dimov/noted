import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyNotesComponent } from './notes/my-notes/my-notes.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/notes',
    },
    {   
        path: 'home',
        redirectTo: '/notes'
    },
    {
        path: 'my-notes',
        component: MyNotesComponent
    },
    {
        path: '**',
        component: HomeComponent
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
