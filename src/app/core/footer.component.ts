import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <footer>
      <p>© 2018 My Meetup - My Meetup is an assessment for <a href="https://www.dvt.co.za/">DVT</a></p>
    </footer>
  `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
