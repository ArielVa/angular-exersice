import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {


  profiles$!: Promise<Profile[]>;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
        this.profiles$ = this.profileService.getAllProfiles();

  }

  async openProfileDetails(index: number) {
    await this.router.navigate(["profiles", index])
  }
}
