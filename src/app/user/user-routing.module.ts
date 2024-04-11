import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthNotLoggedActivate } from '../shared/guards/authNotLogged.activate';
import { AuthLoggedActivate } from '../shared/guards/authLogged.activate';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthNotLoggedActivate]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthNotLoggedActivate]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthLoggedActivate]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
