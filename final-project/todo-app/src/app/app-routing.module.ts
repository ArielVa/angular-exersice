import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemsDetailsComponent } from './components/items-details/items-details.component';
import { ListsDetailsComponent } from './components/lists-details/lists-details.component';
import {ListDetailsComponent} from "./components/list-details/list-details.component";
import {ViewTodoListsGuard} from "./guards/view-todo-lists.guard";
import {ListItemsPresenterComponent} from "./components/list-items-presenter/list-items-presenter.component";
import { InvalidUrlComponent } from './components/invalid-url/invalid-url.component';

export const APP_URLS = {
  empty: '',
  home: 'home',
  lists: 'lists',
  listItems: 'lists/:id',
  addList: 'lists/-1/edit',
  edit: 'lists/:id/edit',
  items: 'items',
  outOfBounds: '**'
}


const urls = APP_URLS;

const routes: Routes = [
  {path: urls.empty, redirectTo: urls.home, pathMatch: 'full'},
  {path: urls.home, component: HomeComponent},
  {path: urls.items, component: ItemsDetailsComponent},
  {path: urls.lists, component: ListsDetailsComponent, canActivate: [ViewTodoListsGuard]},
  {path: urls.edit, component: ListDetailsComponent},
  {path: urls.listItems, component: ListItemsPresenterComponent},
  {path: urls.outOfBounds, component: InvalidUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
