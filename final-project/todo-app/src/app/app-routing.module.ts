import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemsDetailsComponent } from './components/items-details/items-details.component';
import { ListsDetailsComponent } from './components/lists-details/lists-details.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full'},
//   { path: 'home', component: HomeComponent },
//   { path: 'profiles', component: ProfileListComponent},
//   { path: 'profiles/:id', component: ProfileDetailsComponent},
//   { path: 'account', component: AccountComponent},
//   { path: 'search', component: ProfileSearchComponent,  canActivate: [AccountLoginGuard]},
//   { path: '**', component: HomeComponent}

// ];

export const URLS = {
  empty: '',
  home: 'home',
  list: 'list',
  listId: 'list/:id',
  edit: 'list/:id/edit',
  items: 'items',
  outOfBounds: '**'
}

const routes: Routes = [
  {path: URLS.empty, redirectTo: URLS.home, pathMatch: 'full'},
  {path: URLS.home, component: HomeComponent},
  {path: URLS.list, component: ListsDetailsComponent},
  {path: URLS.items, component: ItemsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
