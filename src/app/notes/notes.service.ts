import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Note } from '../types/Note';
import { query } from '@angular/animations';

@Injectable({
    providedIn: 'root',
})
export class NotesService {
    constructor(private afs: AngularFirestore) {}

    getAllById(ownerId:string) {
        return this.afs.collection('notes', ref => ref.where('ownerId', '==', ownerId)).snapshotChanges();
    }

    getByPrivacy(privacy: string ) {
        return this.afs.collection('notes', ref => ref.where('privacy', '==', privacy)).snapshotChanges();

    }

    get(id: string) {
        return this.afs.collection('notes').doc(id).snapshotChanges();

    }

    createNote(note: Note) {
		return this.afs.collection('notes').add(note)
	};

    deleteNote(id: string) {
        return this.afs.collection('notes').doc(id).delete();
    }

    editNote(id:string, note: Note) {
        return this.afs.collection('notes').doc(id).update(note);
    }
}
