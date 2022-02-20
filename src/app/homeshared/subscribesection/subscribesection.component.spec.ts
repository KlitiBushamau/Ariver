import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribesectionComponent } from './subscribesection.component';

describe('SubscribesectionComponent', () => {
  let component: SubscribesectionComponent;
  let fixture: ComponentFixture<SubscribesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribesectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
