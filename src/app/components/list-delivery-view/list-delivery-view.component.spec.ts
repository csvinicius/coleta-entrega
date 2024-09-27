import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeliveryViewComponent } from './list-delivery-view.component';

describe('ListDeliveryViewComponent', () => {
  let component: ListDeliveryViewComponent;
  let fixture: ComponentFixture<ListDeliveryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeliveryViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeliveryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
