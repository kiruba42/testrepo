import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { BodyComponent } from './common/body/body.component';
import { BodyandsidebarComponent } from './common/bodyandsidebar/bodyandsidebar.component';
import { SublevelComponent } from './common/sidebar/sublevel.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
import {PanelModule} from 'primeng/panel';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    BodyComponent,
    BodyandsidebarComponent,
    SublevelComponent,
    DashboardComponent
  ],
  imports: [
    ChartModule,
    MessagesModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    CdkMenuModule,
    OverlayModule,
    ButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
