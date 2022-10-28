import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendinggifsComponent } from './trendinggifs.component';

describe('TrendinggifsComponent', () => {
  let component: TrendinggifsComponent;
  let fixture: ComponentFixture<TrendinggifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendinggifsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendinggifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
