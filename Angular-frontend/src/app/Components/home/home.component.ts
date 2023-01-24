import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showMenu = false;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.http.get('http://localhost:3000/about').subscribe((data: any) => {
      console.log(data);
    });
  }
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

}
