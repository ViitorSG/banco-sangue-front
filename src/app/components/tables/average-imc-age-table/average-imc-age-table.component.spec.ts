import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvarageImcAgeTableComponent } from './average-imc-age-table.component';

describe('AvarageImcAgeTableComponent', () => {
  let component: AvarageImcAgeTableComponent;
  let fixture: ComponentFixture<AvarageImcAgeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvarageImcAgeTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvarageImcAgeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
