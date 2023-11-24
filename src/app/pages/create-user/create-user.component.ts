import { Component } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  userData={
    custName:'',
    mobileNumber:'',
    email:'',
    password:''
   }
   constructor(private  userService: UserLoginService,private route:Router){

   }
   formSubmit(){
    this.userService.createUser(this.userData).subscribe((data:any)=>{
    console.log(data);

  })
   }
   login(){
    this.route.navigateByUrl('')
   }
}
