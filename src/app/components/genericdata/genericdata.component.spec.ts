import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericdataComponent } from './genericdata.component';

describe('GenericdataComponent', () => {
  let component: GenericdataComponent;
  let fixture: ComponentFixture<GenericdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
