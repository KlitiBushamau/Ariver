import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedcategoryComponent } from './featuredcategory.component';

describe('FeaturedcategoryComponent', () => {
  let component: FeaturedcategoryComponent;
  let fixture: ComponentFixture<FeaturedcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
