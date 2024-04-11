import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/User';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{
	isEditOpen: boolean = false;
	user: User = {} as User;
	userJSON: string = localStorage.getItem('user') as string;

	ngOnInit(): void {
		this.user = JSON.parse(this.userJSON)
	}

	toggleEdit() {
		this.isEditOpen = this.isEditOpen!;
	}

}
