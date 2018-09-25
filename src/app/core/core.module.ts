import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatSelectModule, MatOptionModule, MatToolbarModule} from '@angular/material';

import { AppRoutingModule } from './../app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule
  ],
  exports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})

export class CoreModule {}
