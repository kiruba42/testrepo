import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { NavBarData, fadeInOut } from './helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sublevel',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length>0"
      [@submenu]="expanded?
      {value:'visible'
        ,params:{transitionParams:'400ms cubic-bezier(0.86,0,0.07,1)',height:'*'}} 
      :{value:'hidden'
        ,params:{transitionParams:'400ms cubic-bezier(0.86,0,0.07,1)',height:'0'}}"
    class="sublevel-nav">
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
      <a class="sublevel-nav-link"
      (click)="handleclick(item)"
      *ngIf="item.items && item.items.length>0"
      [ngClass]="getActiveClass(item)"
      >
        <i class="sublevel-link-icon fa fa-circle"></i>
        <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
        <i class="menu-collapse-icon" *ngIf="item.items && collapsed" 
        [ngClass]="!item.expanded?'fal fa-angle-right':'fal fa-angle-down'">
        </i>
      </a>
      <a class="sublevel-nav-link"
        *ngIf="!item.items || (item.items && item.items.length==0)"
        [routerLink]="[item.routerlink]"
        routerLinkActive="active-sublevel"
        [routerLinkActiveOptions]="{exact:true}">
        <i class="sublevel-link-icon fa fa-circle"></i>
        <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
      </a>
        <div *ngIf="item.items && item.items.length>0">
        <app-sublevel
          [data]="item"
          [collapsed]="collapsed"
          [multiple]="multiple"
          [expanded]="item.expanded">
        </app-sublevel>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidebar.component.css'],
  animations:[
    fadeInOut,
    trigger('submenu',[
      state('hidden',style({
        height:'0',
        overflow:'hidden'
      })),
      state('visible',style({
        height:'*'
      })),
      transition('visible<=>hidden',[style({overflow:'hidden'}),
    animate('{{transitionParams}}')]),
    transition('void=>*',animate(0))
    ])
  ]
})

export class SublevelComponent {
  @Input() data: NavBarData = {
    routerlink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;
  constructor(private router:Router) {
  }
  handleclick(item:any):void{
    if(!this.multiple){
      if(this.data.items && this.data.items.length>0){
        for(let modelitem of this.data.items){
          if(item !==modelitem && modelitem.expanded){
            modelitem.expanded=true;
          }
        }
      }
    }
    item.expanded=!item.expanded;
  }
  getActiveClass(item:NavBarData): string{
    return item.expanded && this.router.url.includes(item.routerlink)?'active-sublevel':'';
  }
}
