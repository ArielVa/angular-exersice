import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {firstValueFrom, Observable} from 'rxjs';
import {StateService} from "../services/state.service";
import {AppUrls} from "../app-routing.module";

@Injectable({
  providedIn: 'root'
})
export class ViewTodoListsGuard implements CanActivate {

  constructor(private stateService: StateService,
              private router: Router) {
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    const numLists = (await firstValueFrom(this.stateService.getAllLists())).length

    if(numLists === 0) return this.router.createUrlTree([AppUrls().addList]);

    return true;


  }

}
