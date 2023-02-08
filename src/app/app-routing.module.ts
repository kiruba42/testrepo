import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReposearchComponent } from './reposearch/reposearch.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'reposearch',component:ReposearchComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
