import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoramasComponent } from './doramas.component';

describe('DoramasComponent', () => {
  let component: DoramasComponent;
  let fixture: ComponentFixture<DoramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoramasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
