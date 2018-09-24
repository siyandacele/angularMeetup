import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})

export class CoreModule {}
