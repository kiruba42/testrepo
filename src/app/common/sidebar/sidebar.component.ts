import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { AdminSidebar } from './nav-data';
import { Router } from '@angular/router';
import { fadeInOut, NavBarData } from './helper';
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
export class SidebarComponent implements OnInit {
 @Input() collapsed=false;
 @Input() screenWidth=0;

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  // collapsed = false;
  // screenWith = 0;
  multiple: boolean = false;
  navData: any = AdminSidebar;


  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<=768){
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
    }
  }
  constructor(private router:Router) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth>768)
      this.togglecollapse()
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  togglecollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  getActiveClass(data:NavBarData): string{
    return this.router.url.includes(data.routerlink) ? 'active':'';
  }
  shrinkItems(item:NavBarData):void{
    if (!this.multiple) {
      if(!this.collapsed)
        this.togglecollapse();
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