import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import { Category } from '../category.model';
import { MeetupService } from '../meetup.service';

@Component({
  selector: 'app-meetup-settings',
  templateUrl: './meetup-settings.component.html',
  styleUrls: ['./meetup-settings.component.scss']
})
export class MeetupSettingsComponent implements OnInit {
  categories: Observable<Category[]>;
  placeholder = 'Please wait...';

  constructor(private meetupService: MeetupService,
              private router: Router) { }

  ngOnInit() {
    this.categories = this.meetupService.getCategories()
    .finally(() => {
      this.placeholder = 'Choose a category';
    });

    this.categories.subscribe();
  }

  loadGroups(id: number) {
      this.router.navigate(['/groups/', id]);
  }


}
