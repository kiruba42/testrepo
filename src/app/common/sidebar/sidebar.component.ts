import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut, NavBarData } from './helper';
import { Sidebar } from './sidebarData';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    fadeInOut,
     trigger('rotate', [
       transition(':enter', [
         animate('1000ms',
           keyframes([
             style({ transform: 'rotate(0deg)', offset: '0' }),
             style({ transform: 'rotate(2turn)', offset: '1' })
           ])
         )
       ])
     ])
   ]
 })
export class SidebarComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  navData: any = Sidebar;
  screenWith = 0;
  multiple: boolean = false;

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWith=window.innerWidth;
    if(this.screenWith<=768){
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWith});
    }
  }
  constructor(private router:Router) {
    this.screenWith = window.innerWidth;
  }
  togglecollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWith });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWith });
  }

  getActiveClass(data:NavBarData): string{
    return this.router.url.includes(data.routerlink) ? 'active':'';
  }
  shrinkItems(item:NavBarData):void{
    if (!this.multiple) {
      for (let modelitem of this.navData) {
        if (item !== modelitem && modelitem.expanded) {
          modelitem.expanded = false;
        }
      }
    }
  }
  handleClick(item: NavBarData): void {
    this.shrinkItems(item);
    item.expanded=!item.expanded;
  }
}
