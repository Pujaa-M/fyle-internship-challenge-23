import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeChartComponent } from './size-chart.component';

describe('SizeChartComponent', () => {
  let component: SizeChartComponent;
  let fixture: ComponentFixture<SizeChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SizeChartComponent]
    });
    fixture = TestBed.createComponent(SizeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
