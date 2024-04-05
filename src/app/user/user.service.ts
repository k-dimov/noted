import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private afAuth: AngularFireAuth, private router: Router) {

	}

	get isAuthenticated(): boolean {
		return this.afAuth.currentUser !== null
	}

	signUp(email:string, password:string):void {
		this.afAuth.createUserWithEmailAndPassword(email, password)
			.then(() => {
				this.router.navigate(['/']);
			})
			.catch((err) => {
				console.error(err)
			})
	}

	signIn(email:string, password:string):void {
		this.afAuth.signInWithEmailAndPassword(email, password)
			.then(() => {
				this.router.navigate(['/']);
			})
			.catch((err) => {
				console.error(err)
			})
	}
}
