import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmMessageComponent } from './alarm-message.component';

describe('AlarmMessageComponent', () => {
  let component: AlarmMessageComponent;
  let fixture: ComponentFixture<AlarmMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
