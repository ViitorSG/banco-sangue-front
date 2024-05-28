import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesityPercentageTableComponent } from './obesity-percentage-table.component';

describe('ObesityPercentageTableComponent', () => {
  let component: ObesityPercentageTableComponent;
  let fixture: ComponentFixture<ObesityPercentageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObesityPercentageTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObesityPercentageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
