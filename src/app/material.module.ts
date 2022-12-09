import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule
    ],
    providers: [],
})
export class MaterialModule { }