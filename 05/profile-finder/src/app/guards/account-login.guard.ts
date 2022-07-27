import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { firstValueFrom, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountLoginGuard implements CanActivate {

  constructor(private authService: AuthService){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      
      const t = await firstValueFrom(this.authService.getStatusObs());

      if(!t) return false;
      console.log(t);
      
    return true;
  }
  
}
