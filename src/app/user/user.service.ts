import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '@angular/fire/auth';

import { getDatabase, ref, set } from '@angular/fire/database';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    loggedIn = new BehaviorSubject<boolean>(false);
    loggedIn$ = this.loggedIn.asObservable();

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.afAuth.onAuthStateChanged((user) => {
            if (user) {
                this.loggedIn.next(true);
            } else {
                this.loggedIn.next(false);
            }
        });
    }

    async getUser() {
        let user: User = (await this.afAuth.currentUser) as User;
        return user;
    }

    signUp(email: string, password: string, username: string): void {
        this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                res.user?.updateProfile({
                    displayName: username,
                });
                this.getUser().then(this.saveUser);

                this.router.navigate(['/']);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    signIn(email: string, password: string): void {
        this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.router.navigate(['/']);
                this.getUser().then(this.saveUser);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    logout(): void {
        this.afAuth
            .signOut()
            .then(() => {
                this.router.navigate(['/']);
                localStorage.clear();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    saveUser(user: User): void {
        localStorage.setItem(
            'user',
            JSON.stringify({
                displayName: user.displayName,
                email: user.email,
                createdOn: user.metadata.creationTime,
                uid: user.uid,
            })
        );
    }
}
