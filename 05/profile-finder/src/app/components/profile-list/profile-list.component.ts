import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {


  profiles$!: Promise<Profile[]>;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
        this.profiles$ = this.profileService.getAllProfiles();

  }

}
