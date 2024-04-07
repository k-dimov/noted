import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        RouterModule,
        MatButtonModule,
        MatMenuModule,
    ],
    exports: [HeaderComponent],
})
export class CoreModule {}
