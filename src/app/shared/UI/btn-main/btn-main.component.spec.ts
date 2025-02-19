import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMainComponent } from './btn-main.component';

describe('BtnMainComponent', () => {
  let component: BtnMainComponent;
  let fixture: ComponentFixture<BtnMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
