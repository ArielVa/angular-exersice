import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemsDetailsComponent } from './components/items-details/items-details.component';
import { ListsDetailsComponent } from './components/lists-details/lists-details.component';
import {TodoListEditorGuard} from "./guards/todo-list-editor.guard";
import {ListDetailsComponent} from "./components/list-details/list-details.component";

export function AppUrls() {
  return {
    empty: '',
    home: 'home',
    list: 'lists',
    listId: 'lists/:id',
    addList: 'lists/-1/edit',
    edit: 'lists/:id/edit',
    items: 'items',
    outOfBounds: '**'
  }
}

const urls = AppUrls();

const routes: Routes = [
  {path: urls.empty, redirectTo: urls.home, pathMatch: 'full'},
  {path: urls.home, component: HomeComponent},
  {path: urls.items, component: ItemsDetailsComponent},
  {path: urls.list, component: ListsDetailsComponent},
  {path: urls.addList, component: ListDetailsComponent, canActivate: [TodoListEditorGuard]},
  {path: urls.edit, component: ListDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
