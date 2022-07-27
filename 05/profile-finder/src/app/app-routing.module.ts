import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileSearchComponent } from './components/profile-search/profile-search.component';
import {ProfileDetailsComponent} from "./components/profile-details/profile-details.component";
import { AccountLoginGuard } from './guards/account-login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'profiles', component: ProfileListComponent},
  { path: 'profiles/:id', component: ProfileDetailsComponent},
  { path: 'account', component: AccountComponent},
  { path: 'search', component: ProfileSearchComponent,  canActivate: [AccountLoginGuard]},
  { path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
