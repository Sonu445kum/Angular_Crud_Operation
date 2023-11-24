import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UpdateStudentComponent } from './pages/update-student/update-student.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"welcome",
    component:WelcomeComponent,
    pathMatch:"full"
  },
  {
    path:"create",
    component:CreateUserComponent,
    pathMatch:"full"

  },
  {
    path:'update/:custId',
    component:UpdateStudentComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
