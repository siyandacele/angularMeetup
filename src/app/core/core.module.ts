import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule,
    FooterComponent
  ]
})

export class CoreModule {}
