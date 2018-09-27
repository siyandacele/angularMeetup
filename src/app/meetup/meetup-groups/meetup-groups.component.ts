import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MeetupService } from '../meetup.service';

@Component({
  selector: 'app-meetup-groups',
  templateUrl: './meetup-groups.component.html',
  styleUrls: ['./meetup-groups.component.scss']
})
export class MeetupGroupsComponent implements OnInit {
  id: number;
  groups: {};
  category: string;
  constructor(private route: ActivatedRoute,
              private meetupService: MeetupService) { }
  ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
          }
        );

      if (this.id) {
        this.category = '&category=' + this.id;
      }

      this.meetupService.getGroups(this.category)
      .subscribe(
        (data) => {
          this.groups = data;
        }
      );
  }

}
