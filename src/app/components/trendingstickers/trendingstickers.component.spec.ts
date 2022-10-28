import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingstickersComponent } from './trendingstickers.component';

describe('TrendingstickersComponent', () => {
  let component: TrendingstickersComponent;
  let fixture: ComponentFixture<TrendingstickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingstickersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingstickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
