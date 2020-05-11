import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPreviewComponent } from './events-preview.component';

describe('EventsPreviewComponent', () => {
  let component: EventsPreviewComponent;
  let fixture: ComponentFixture<EventsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
