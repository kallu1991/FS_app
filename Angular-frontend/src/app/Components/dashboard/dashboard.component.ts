import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService){}
  ngOnInit(): void {
   
  }

  // ngOnInit(): void {
  //   this.userService.getReceiepes().subscribe((data)=>{
  //     console.log(data);
      
  //   })
  // }

}
