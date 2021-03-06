import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AuthGuard } from './helper/auth.guard';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path:'empleado',component: EmpleadoComponent,canActivate:[AuthGuard]},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'', redirectTo:'home',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
