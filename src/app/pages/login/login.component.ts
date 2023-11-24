import { Component } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 // Writes here logic for Form Submit Button
 // DataTypes
 userData={
  email:'',
  password:''
 }
 // create a constructor for loginService
 constructor(private loginService: UserLoginService,private router : Router){

 }
  // logic
  formSubmit(){
    // Send here Data to The backend
    // console.warn('hello guys')
    // console.warn(this.userData.email); 
    // console.warn(this.userData.password); 

    this.loginService.loginMethod(this.userData).subscribe((data:any)=>{

      console.log("data:"+data);
      this.loginService.loginUser(data.jwtToken);
      console.log(data.jwtToken);
      this.router.navigateByUrl('/welcome')
    })
    
  }
  signup(){
    this.router.navigateByUrl('/create')
  }

}
