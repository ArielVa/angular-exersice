import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Profile } from 'src/app/models/profile.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loginStatus$!: Observable<boolean>;
  accountStatusText$!: Observable<string>;

  constructor(private profileService: ProfileService,
    private authService: AuthService) { }

  ngOnInit(): void {

    this.loginStatus$ = this.authService.getStatusObs();

    this.accountStatusText$ = this.loginStatus$.pipe(
      map(status => status ? "Logged In" : "Guest")
    )
  }

}
