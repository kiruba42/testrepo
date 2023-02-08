import { Component } from '@angular/core';
interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-bodyandsidebar',
  templateUrl: './bodyandsidebar.component.html',
  styleUrls: ['./bodyandsidebar.component.css']
})
export class BodyandsidebarComponent {

  isSideNavCollapsed=false;
  screenWidth=0;
  onToggleSideNav(data:SideNavToggle):void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
    }


}
