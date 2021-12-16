import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VoidComponent } from './components/void/void.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';





const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"**", component: VoidComponent},
  {path:"login", component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
