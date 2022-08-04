import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ListsDetailsComponent } from './components/lists-details/lists-details.component';
import { ItemsDetailsComponent } from './components/items-details/items-details.component';
import { TitleComponent } from './components/title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { StatDisplayComponent } from './components/stat-display/stat-display.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import {MatSelectModule} from "@angular/material/select";
import {MatMenuModule} from "@angular/material/menu";
import {ReactiveFormsModule} from "@angular/forms";
import { FormErrorDisplayComponent } from './components/form-error-display/form-error-display.component';
import { ListItemsPresenterComponent } from './components/list-items-presenter/list-items-presenter.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { TodoItemPresenterComponent } from './components/todo-item-presenter/todo-item-presenter.component';
import { InvalidUrlComponent } from './components/invalid-url/invalid-url.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ListsDetailsComponent,
    ItemsDetailsComponent,
    TitleComponent,
    StatDisplayComponent,
    ListDetailsComponent,
    FormErrorDisplayComponent,
    ListItemsPresenterComponent,
    TodoItemPresenterComponent,
    InvalidUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
