import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {StateService} from "../services/state.service";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoListEditorGuard implements CanActivate {

  constructor(private router: Router,
              private stateService: StateService) {
  }

  private memory!: string;

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Promise<boolean | UrlTree> {

    if(route.params['id'] !== '-1') {
      if (this.memory === state.url) return true;
      this.memory = state.url;

      return this.router.createUrlTree([this.memory])
    }


    return true;
  }

}
