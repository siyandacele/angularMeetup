import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupSettingsComponent } from './meetup-settings.component';

describe('MeetupSettingsComponent', () => {
  let component: MeetupSettingsComponent;
  let fixture: ComponentFixture<MeetupSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
