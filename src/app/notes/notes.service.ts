import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Note } from '../types/Note';

@Injectable({
    providedIn: 'root',
})
export class NotesService {
    constructor(private afs: AngularFirestore) {}

    getAll() {
        return this.afs.collection('notes').snapshotChanges();
    }

    get(id: string) {
        return this.afs.collection('notes').doc(`${id}`).snapshotChanges();

    }

    createNote(note: Note) {
		return this.afs.collection('notes').add(note)
	};


}
