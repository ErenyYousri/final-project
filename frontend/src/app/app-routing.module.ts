import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { FlightsComponent } from './flights/flights.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
 
  {path:"flights", component:FlightsComponent},
  {path:"booking", component:BookingComponent},
  {path:"Home", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"user", component:UsersComponent},
  {path:"login",component:LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
