import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signInUserForm: FormGroup;
  loginSuccessful:Boolean = false;
  successMessage:string = '';
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signInUserForm = this.fb.group({
      userName:[''],
      passWord:['']
    })
  }
  ngOnInit(): void {}
  loginUser() {
    return this.userService.signInUser(this.signInUserForm.value).subscribe((data:any)=>{
      this.successMessage = data.message;
      this.loginSuccessful = true;
      this.signInUserForm.reset();
    })
  };

  close(){
    this.loginSuccessful = false;
    this.successMessage = '';
  }
}
