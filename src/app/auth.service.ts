import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) 
  {
    if(this.IsloggedIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;  
    }
    
  }

  IsloggedIn(){
    if(window.sessionStorage.getItem('active') != null
    &&
    window.sessionStorage.getItem('active') == "1"){
            return true;
    }
    else{
           return false;
    }
  }

  constructor(private router:Router) 
  {  }

Login(userdetails){
  if(userdetails.uname=="abc" && userdetails.password=="abc@123"){
     window.sessionStorage.setItem('active',"1");
     return true;
  }
  else{
    return false;
  }
}

Logout(){
  window.sessionStorage.setItem('active',"0");
}


}