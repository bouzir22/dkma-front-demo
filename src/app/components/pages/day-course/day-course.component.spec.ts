import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCourseComponent } from './day-course.component';

describe('DayCourseComponent', () => {
  let component: DayCourseComponent;
  let fixture: ComponentFixture<DayCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
