import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url: string = environment.baseUrl;
  profiles!: Profile[];
  profiles$ = new Subject<Profile[]>();

  constructor(private http: HttpClient) { }

  async getAllProfiles(): Promise<Profile[]> {
    return firstValueFrom(this.http.get<Profile[]>(this.url));
  }

}