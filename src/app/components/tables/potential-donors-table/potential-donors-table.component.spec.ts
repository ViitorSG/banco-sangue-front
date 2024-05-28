import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialDonorsTableComponent } from './potential-donors-table.component';

describe('PotentialDonorsTableComponent', () => {
  let component: PotentialDonorsTableComponent;
  let fixture: ComponentFixture<PotentialDonorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotentialDonorsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PotentialDonorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
