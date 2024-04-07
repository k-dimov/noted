import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    constructor(private userService: UserService) {}

    loginHandler(
        form: NgForm,
        emailInput: NgModel,
        passwordInput: NgModel
    ): void {
        if (form.invalid) {
            return;
        }
        this.userService.signIn(emailInput.value, passwordInput.value);
    }
}
