import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStarWarsComponent } from './get-star-wars.component';

describe('GetStarWarsComponent', () => {
  let component: GetStarWarsComponent;
  let fixture: ComponentFixture<GetStarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStarWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
