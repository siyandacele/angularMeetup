import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material';
import { MeetupSettingsComponent } from './meetup-settings/meetup-settings.component';
import { MeetupGroupsComponent } from './meetup-groups/meetup-groups.component';

@NgModule({
  declarations: [
    MeetupSettingsComponent,
    MeetupGroupsComponent],
  imports: [
    CommonModule,
    MatCardModule,

  ]
})

export class MeetupModule {}
