import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef
} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatSnackBarModule,
  ]
})
export class SharedModule { }
