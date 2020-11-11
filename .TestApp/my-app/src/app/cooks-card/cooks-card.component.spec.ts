import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooksCardComponent } from './cooks-card.component';

describe('CooksCardComponent', () => {
  let component: CooksCardComponent;
  let fixture: ComponentFixture<CooksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooksCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
