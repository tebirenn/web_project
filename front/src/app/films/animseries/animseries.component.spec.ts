import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimseriesComponent } from './animseries.component';

describe('AnimseriesComponent', () => {
  let component: AnimseriesComponent;
  let fixture: ComponentFixture<AnimseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
