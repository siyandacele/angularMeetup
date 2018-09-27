import { MeetupService } from './meetup.service';
import { EscapeHtmlPipe } from './../shared/to-html.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatSelectModule, MatOptionModule, MatToolbarModule} from '@angular/material';

import { AppRoutingModule } from '../app-routing.module';

import { MeetupSettingsComponent } from './meetup-settings/meetup-settings.component';
import { MeetupGroupsComponent } from './meetup-groups/meetup-groups.component';


@NgModule({
  declarations: [
    MeetupSettingsComponent,
    MeetupGroupsComponent,
    EscapeHtmlPipe,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    AppRoutingModule,
    MatOptionModule,
    MatToolbarModule
  ],
  providers: [MeetupService]
})

export class MeetupModule {}
