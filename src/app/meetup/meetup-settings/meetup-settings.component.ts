import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { MeetupService } from '../meetup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-meetup-settings',
  templateUrl: './meetup-settings.component.html',
  styleUrls: ['./meetup-settings.component.scss']
})
export class MeetupSettingsComponent implements OnInit, OnDestroy {
  categories: Category[];
  subscription: Subscription;
  placeholder = 'Please wait...';

  constructor(private meetupService: MeetupService,
              private router: Router) { }

  ngOnInit() {
    const localCategories = this.meetupService.getLocalCategories();
    if (localCategories.length === 0) {
      this.meetupService.getCategories();
        this.subscription = this.meetupService.newCategories.subscribe(
        (categories: Category[]) => {
          this.categories = categories;
          this.placeholder = 'Choose categories';
        }
      );
    } else {
      this.categories = localCategories;
      this.placeholder = 'Choose categories';
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadGroups(id: number) {
      this.router.navigate(['/groups/', id]);
  }


}
