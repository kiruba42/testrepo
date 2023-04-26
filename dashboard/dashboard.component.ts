import { Component } from '@angular/core';
import { AdminDashboardDenu, AdminDashboardRepo, Dashboard, UserDashboardDenu, UserDashboardRepo } from './dashboardlink';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
// denuDashboard:Dashboard[]=UserDashboardDenu;
denuDashboard:Dashboard[]=AdminDashboardDenu;
// repoDashboard:Dashboard[]=UserDashboardRepo;
repoDashboard:Dashboard[]=AdminDashboardRepo;

}
