import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'FS_app';
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
