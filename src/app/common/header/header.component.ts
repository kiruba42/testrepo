import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { languages, notifications, userItems } from './header-dummy-data';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  canShowSearchAsOverlay=false;
  selectedlanguage:any;
  languages=languages;
  notifications=notifications;
  userItems=userItems;
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<=768){
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
    }
  }
  constructor(private router:Router){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth>768)
      this.closeSidenav()
  }
 
  closeSidenav(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth)
    this.selectedlanguage=this.languages[0];
  }
  getHeadClass():string{
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    }
    else{
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }
  checkCanShowSearchAsOverlay(innerWidth:number):void{
    if(innerWidth<845){
      this.canShowSearchAsOverlay=true;
    }else{
      this.canShowSearchAsOverlay=false;
    }
  }
  headerlink(routerlink:any){
    if(routerlink==''){
      sessionStorage.clear();
      window.location.reload();
    }else{
      this.router.navigate([routerlink]);
    }
  }
}
