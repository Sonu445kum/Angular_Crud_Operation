import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  // this is for login
  constructor(private http:HttpClient) { }
  public loginMethod(userLoginData:any){
    return this.http.post("http://localhost:9090/users/login",userLoginData)
  }

  // this is for Create
  public createUser(createData:any){
    return this.http.post("http://localhost:9090/customer/create",createData)
  }
  // getAll User ;
  public getAllUser(){
    return this.http.get("http://localhost:9090/customer/getAll");
  }
  // getUserById
  public getById(id:any){
    return this.http.get(`http://localhost:9090/customer/getCustomer/${id}`);
  }
  // getByUpdate
  public updateUser(updatedData:any,custId:any){
    return this.http.put(`http://localhost:9090/customer/update/${custId}`,updatedData)
  }
  // getByDelete
  public deleteUser(custId:any){
    return this.http.delete(`http://localhost:9090/customer/delete/${custId}`)
  }
  // login User: set token user
  public loginUser(token:any){
    // in this way we can store token from return value from backend;
   localStorage.setItem('token',token);
    return true;
   }
  
  // isLogin: user is login or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem('token')
    if(tokenStr==undefined || tokenStr ==''||tokenStr==null){
      return false;
    }
    else{
      return true;
    }
  }
  // logout: remove token from local storage;
  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;

}
// get token;
public getToken(){
  return localStorage.getItem('token');
}
// set userDetails;
// json to string;
public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user))

}
}
