import { Component, OnInit } from '@angular/core';
import { AdminSidebar } from './nav-data';
import { NavBarData, fadeInOut } from './helper';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Router } from '@angular/router';

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
  navData: any = AdminSidebar;
  multiple: boolean = false;
  collapsed = true;

  display: boolean = false;
  constructor(private router:Router) { }
    close(){  
      console.log("hi")
      this.display=!this.display;
    }
  ngOnInit(): void {
  }
  getActiveClass(data:NavBarData): string{
    return this.router.url.includes(data.routerlink) ? 'active':'';
  }
  shrinkItems(item:NavBarData):void{
    if (!this.multiple) {
      // if(!this.collapsed)
      //   this.togglecollapse();
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
