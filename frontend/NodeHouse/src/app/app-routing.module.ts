import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VoidComponent } from './components/void/void.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path:"home", component: HomeComponent, canActivate: [AuthGuard]},
  {path:"login", component:LoginComponent},
  {path:"**", component:VoidComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
