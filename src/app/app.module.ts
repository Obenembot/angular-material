import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from "@angular/material/button";
import {HomeComponent} from "./home/home.component";
import { TopMenuComponent } from './top-menu/top-menu.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AboutComponent} from "./about/about.component";
import {MatTabsModule} from "@angular/material/tabs";
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import {MatCardModule} from '@angular/material/card';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    AboutComponent,
    CoursesCardListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    BrowserModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
