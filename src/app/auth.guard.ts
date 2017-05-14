import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LibrusDataService } from './librus-data.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private LibrusData: LibrusDataService, private router: Router){}
  canActivate(){
    if(this.LibrusData.isLoggedIn()){
      this.router.navigate(['login']);
      return false;
    }else{ return true; }
  }
}
