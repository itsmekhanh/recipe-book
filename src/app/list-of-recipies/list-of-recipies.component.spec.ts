import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRecipiesComponent } from './list-of-recipies.component';

describe('ListOfRecipiesComponent', () => {
  let component: ListOfRecipiesComponent;
  let fixture: ComponentFixture<ListOfRecipiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfRecipiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
