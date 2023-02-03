import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CheckOurMenuComponent } from './Components/check-our-menu/check-our-menu.component';
import { SigninComponent } from './Components/signin/signin.component';
import { RegisterComponent } from './Components/register/register.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AppInterceptor } from './app.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './Shared/shared/shared.module';
import { SnackBarService } from './Services/snack-bar.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckOurMenuComponent,
    SigninComponent,
    RegisterComponent,
    ContactComponent,
    PagenotfoundComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,SharedModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi:true
  },SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
