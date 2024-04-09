import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user/user-routing.module';
import { NotesRoutingModule } from './notes/notes-routing.module';
import { NotesModule } from './notes/notes.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        UserModule,
        CoreModule,
        UserRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        NotesModule,
        NotesRoutingModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
