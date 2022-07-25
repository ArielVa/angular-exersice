import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { ProfileSearchComponent } from './components/profile-search/profile-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileListComponent,
    ProfileDetailsComponent,
    HomeComponent,
    AccountComponent,
    ProfileSearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
