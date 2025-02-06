import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategSideBarComponent } from './categ-side-bar.component';

describe('CategSideBarComponent', () => {
  let component: CategSideBarComponent;
  let fixture: ComponentFixture<CategSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
