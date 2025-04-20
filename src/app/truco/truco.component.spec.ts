import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucoComponent } from './truco.component';

describe('TrucoComponent', () => {
  let component: TrucoComponent;
  let fixture: ComponentFixture<TrucoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrucoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrucoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
