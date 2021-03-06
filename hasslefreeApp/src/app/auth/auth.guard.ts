import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      alert(localStorage.getItem('userToken'));
      if(localStorage.getItem('userToken') != null) {
        return true;
      }
      else{
        
        this.router.navigate(['/login']);
        return false;
      }
  }
}
