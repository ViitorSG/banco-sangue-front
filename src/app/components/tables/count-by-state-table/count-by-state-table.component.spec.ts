import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContByStateTableComponent } from './cont-by-state-table.component';

describe('ContyByStateTableComponent', () => {
  let component: ContByStateTableComponent;
  let fixture: ComponentFixture<ContByStateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContByStateTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContByStateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
