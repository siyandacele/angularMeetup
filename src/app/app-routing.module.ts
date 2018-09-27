import { MeetupSettingsComponent } from './meetup/meetup-settings/meetup-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetupGroupsComponent } from './meetup/meetup-groups/meetup-groups.component';

const appRoute: Routes = [
  { path: '', component: MeetupSettingsComponent },
  { path: 'groups/:id', component: MeetupGroupsComponent },
  { path: 'groups', component: MeetupGroupsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
