import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DelayService {

  constructor() { }

  delay(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

}
