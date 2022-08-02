import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoListEditorGuard implements CanActivate {

  constructor(private router: Router) {
  }

  private memory!: string;

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Promise<boolean | UrlTree> {

    console.log(state.url)
    if(route.params['id'] !== '-1') {
      if (this.memory === state.url) return true;
      this.memory = state.url;
      console.log("redirected")
      return this.router.createUrlTree([this.memory])
    }


    return true;
  }

}
