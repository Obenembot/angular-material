import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TablePaginationFilterComponent } from './table-pagination-filter/table-pagination-filter.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { SelectComponent } from './select/select.component';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from "@angular/forms";
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TabsComponent } from './tabs/tabs.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar/snack-bar.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    AboutComponent,
    CoursesCardListComponent,
    TableComponent,
    TablePaginationComponent,
    TablePaginationFilterComponent,
    SelectComponent,
    ProgressBarComponent,
    TabsComponent,
    SnackBarComponent
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
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
