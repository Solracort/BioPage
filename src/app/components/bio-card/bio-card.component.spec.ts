import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCardComponent } from './bio-card.component';

describe('BioCardComponent', () => {
  let component: BioCardComponent;
  let fixture: ComponentFixture<BioCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioCardComponent]
    });
    fixture = TestBed.createComponent(BioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
