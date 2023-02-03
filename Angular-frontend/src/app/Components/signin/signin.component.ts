import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/Services/snack-bar.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signInUserForm: FormGroup;
  loginSuccessful: Boolean = false;
  successMessage: string = '';
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snack:SnackBarService
  ) {
    this.signInUserForm = this.fb.group({
      userName: [''],
      passWord: [''],
    });
  }
  ngOnInit(): void {}

  loginUser() {
    return this.userService
      .signInUser(this.signInUserForm.value)
      .subscribe((data: any) => {
        this.successMessage = data.message;
        this.snack.openSnackBar(this.successMessage)
        // this.loginSuccessful = true;
        this.signInUserForm.reset();
        this.router.navigate(['/dashboard']);
      });
  }

  close() {
    this.loginSuccessful = false;
    this.successMessage = '';
  }
}
