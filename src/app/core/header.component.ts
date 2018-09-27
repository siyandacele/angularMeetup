import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="nav nav-shodow">
    <a class="" [routerLink]="['/']">MyMeetup Groups</a>
  </nav>`
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
