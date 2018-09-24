import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetupGroupsComponent } from './meetup/meetup-groups/meetup-groups.component';
import { MeetupSettingsComponent } from './meetup/meetup-settings/meetup-settings.component';

const appRoute: Routes = [
  { path: 'settings', component: MeetupSettingsComponent },
  { path: 'groups', component: MeetupGroupsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
