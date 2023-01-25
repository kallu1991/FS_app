import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerUserForm: FormGroup;
  userCreated: string = '';
  showToaster: Boolean = false;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerUserForm = this.fb.group({
      userName: ['', [Validators.required, Validators.maxLength]],
      passWord: ['', [Validators.required, Validators.maxLength]],
      reEnterPassWord: ['', [Validators.required, Validators.maxLength]],
    });
  }

  get() {
    return this.registerUserForm.controls;
  }
  ngOnInit(): void {}

  registerNewUser() {
    return this.userService
      .createUser(this.registerUserForm.value)
      .subscribe((data: any) => {
        // if (data.status === 200) {
          this.userCreated = data.message;
          console.log(data);
          this.showToaster = true;
          this.registerUserForm.reset();
        // }
      });
  }
  close(){
    this.showToaster = false;
    this.userCreated = '';
  }
}
