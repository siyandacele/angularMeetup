import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupGroupsComponent } from './meetup-groups.component';

describe('MeetupGroupsComponent', () => {
  let component: MeetupGroupsComponent;
  let fixture: ComponentFixture<MeetupGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
