import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeliveryNeighborhoodComponent } from './card-delivery-neighborhood.component';

describe('CardDeliveryNeighborhoodComponent', () => {
  let component: CardDeliveryNeighborhoodComponent;
  let fixture: ComponentFixture<CardDeliveryNeighborhoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDeliveryNeighborhoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDeliveryNeighborhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
