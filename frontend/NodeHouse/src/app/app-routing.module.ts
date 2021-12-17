import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VoidComponent } from './components/void/void.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"home", component: HomeComponent, canActivate: [AuthGuard]},
  {path:"dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path:"**",component:VoidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }