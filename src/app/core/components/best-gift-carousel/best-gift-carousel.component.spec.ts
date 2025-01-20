import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestGiftCarouselComponent } from './best-gift-carousel.component';

describe('BestGiftCarouselComponent', () => {
  let component: BestGiftCarouselComponent;
  let fixture: ComponentFixture<BestGiftCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestGiftCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestGiftCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
