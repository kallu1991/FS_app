import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOurMenuComponent } from './Components/check-our-menu/check-our-menu.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './Components/register/register.component';
import { SigninComponent } from './Components/signin/signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'check-our-menu', component: CheckOurMenuComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
