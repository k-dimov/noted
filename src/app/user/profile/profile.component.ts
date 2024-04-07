import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'firebase/auth';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
    constructor(private userService: UserService) {}

	get currUser(): User | null {
		let user:User | null = null; 
		this.userService.getUser()
			.then(console.log)

		return user;
	}
}
