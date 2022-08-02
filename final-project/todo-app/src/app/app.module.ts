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
import { FormErrorDisplayerComponent } from './components/form-error-displayer/form-error-displayer.component';

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
    FormErrorDisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
