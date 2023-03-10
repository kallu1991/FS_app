import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService {
  snackBarConfig: MatSnackBarConfig | undefined;
  snackBarRef: MatSnackBarRef<any> | undefined;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  snackBarAutoHide = '3000';

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    this.snackBarConfig.panelClass = 'custom-snackbar';
    this.snackBarRef = this.snackBar.open(message, '', this.snackBarConfig);
  }
}
