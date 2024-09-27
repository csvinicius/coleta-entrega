import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeliveryFailedComponent } from './card-delivery-failed.component';

describe('CardDeliveryFailedComponent', () => {
  let component: CardDeliveryFailedComponent;
  let fixture: ComponentFixture<CardDeliveryFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDeliveryFailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDeliveryFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
