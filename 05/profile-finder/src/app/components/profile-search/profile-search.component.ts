import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, switchAll } from 'rxjs';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {


  nameToSearch$ = new BehaviorSubject<string>('');
  profiles$!: Observable<Profile[]>;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profiles$ = this.nameToSearch$.pipe(
      map(subString => this.profileService.searchByName(subString)),
      switchAll()
    )
  }

  onInputValueChanged(subString: string) {
    console.log(subString);
    
  }

}
