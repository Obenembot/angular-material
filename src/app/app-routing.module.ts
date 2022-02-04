import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from "./about/about.component";
import {TableComponent} from "./table/table.component";
import {TablePaginationComponent} from "./table-pagination/table-pagination.component";
import {TablePaginationFilterComponent} from "./table-pagination-filter/table-pagination-filter.component";
import {SelectComponent} from "./select/select.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";
import {TabsComponent} from "./tabs/tabs.component";
import {SnackBarComponent} from "./snack-bar/snack-bar.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "pagination",
    component: TablePaginationComponent
  }  ,
  {
    path: "filter",
    component: TablePaginationFilterComponent
  },
  {
    path: "select",
    component: SelectComponent
  },
  {
    path: "progress-bar",
    component: ProgressBarComponent
  },
  {
    path: "tabs",
    component: TabsComponent
  },
  {
    path: "snack-bar",
    component: SnackBarComponent
  },
  {
    path: "**",
    redirectTo: '/'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
