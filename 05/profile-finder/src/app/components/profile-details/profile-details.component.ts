import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {firstValueFrom, map, Observable, switchAll} from "rxjs";
import {Profile} from "../../models/profile.model";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  index$!: Observable<number>;
  profile$!: Observable<Profile>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private profileService: ProfileService) { }

  ngOnInit(): void {
    this.index$ = this.activatedRoute.params.pipe(
      map(param => Number(param['id']))
    );

    this.profile$ = this.activatedRoute.params.pipe(
      map(param => this.profileService.getProfile(Number(param['id']))),
      switchAll()
    );
  }

  returnToProfiles() {
    this.router.navigate(["profiles"])
  }

}
