import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  status = false;
  status$ = new BehaviorSubject<boolean>(this.status);

  constructor() { }

  getStatusObs(): Observable<boolean> {
    return this.status$.asObservable();
  }

  setAccountStatus(status: boolean) {
    this.status$.next(status);
  }

}
