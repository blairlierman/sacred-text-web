import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSubcategoriesComponent } from './app-subcategories.component';

describe('AppSubcategoriesComponent', () => {
  let component: AppSubcategoriesComponent;
  let fixture: ComponentFixture<AppSubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
