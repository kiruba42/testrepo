import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyandsidebarComponent } from './common/bodyandsidebar/bodyandsidebar.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';

const routes: Routes = [
  {path:'body',component:BodyandsidebarComponent},
  {path:'dashboard',component:DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
