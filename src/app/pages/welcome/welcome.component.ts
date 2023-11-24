import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
 
registeredStudent:any
constructor(private userLogin : UserLoginService,private routes:Router){
}

ngOnInit(): void {
    this.userLogin.getAllUser().subscribe((data)=>{
      this.registeredStudent = data;
      console.log(data);
      })
}
updateUser(id:any){

this.routes.navigateByUrl(`/update/${id}`)
}
deleteUser(id:any){
  this.userLogin.deleteUser(id).subscribe((data:any)=>{
    console.log(data);
  })
}
}
