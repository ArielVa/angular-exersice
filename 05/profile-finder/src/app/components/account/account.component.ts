import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  setAuthState(status: boolean) {
    this.authService.setAccountStatus(status);
  }
}
