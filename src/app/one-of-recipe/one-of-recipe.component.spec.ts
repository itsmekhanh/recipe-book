import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOfRecipeComponent } from './one-of-recipe.component';

describe('OneOfRecipeComponent', () => {
  let component: OneOfRecipeComponent;
  let fixture: ComponentFixture<OneOfRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneOfRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOfRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
