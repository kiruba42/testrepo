import { Component, OnInit } from '@angular/core';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-bodyandsidebar',
  templateUrl: './bodyandsidebar.component.html',
  styleUrls: ['./bodyandsidebar.component.css']
})
export class BodyandsidebarComponent implements OnInit {

  isSideNavCollapsed=true;
  screenWidth=window.innerWidth;

  sidebar:any;
  onToggleSideNav(data:SideNavToggle):void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
    }
    constructor(){
      this.sidebar=sessionStorage.getItem("sidebar");
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
