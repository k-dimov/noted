import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
    constructor(private userService: UserService) {}
    registerHandler(form: NgForm, emailInput: NgModel, passwordInput: NgModel) {
        if (form.invalid) {
            return;
        }

        this.userService.signUp(emailInput.value, passwordInput.value);
    }
}
