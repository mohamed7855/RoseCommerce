import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerGiftsComponent } from './seller-gifts.component';

describe('SellerGiftsComponent', () => {
  let component: SellerGiftsComponent;
  let fixture: ComponentFixture<SellerGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerGiftsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
