import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStarWarsComponent } from './display-star-wars.component';

describe('DisplayStarWarsComponent', () => {
  let component: DisplayStarWarsComponent;
  let fixture: ComponentFixture<DisplayStarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStarWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
