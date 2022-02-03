import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from "./about/about.component";
import {TableComponent} from "./table/table.component";
import {TablePaginationComponent} from "./table-pagination/table-pagination.component";
import {TablePaginationFilterComponent} from "./table-pagination-filter/table-pagination-filter.component";

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
    path: "**",
    redirectTo: '/'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
