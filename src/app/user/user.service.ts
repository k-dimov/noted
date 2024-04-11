import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    user: User = {} as User;
    constructor(private afAuth: AngularFireAuth, private router: Router) {}

    get isLoggedIn() {
        return localStorage.getItem('user')!!;
    }

    async getUser() {
        let user: User = (await this.afAuth.currentUser) as User;
        return user;
    }
    editUser() {
        this.afAuth.currentUser.then()
    }
    signUp(email: string, password: string, username: string): void {
        this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                return res.user?.updateProfile({
                    displayName: username,
                });
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                this.getUser().then((u) => this.saveUser(u));
                this.router.navigate(['/notes']);
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
