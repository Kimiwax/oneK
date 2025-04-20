import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscobaComponent } from './escoba.component';

describe('EscobaComponent', () => {
  let component: EscobaComponent;
  let fixture: ComponentFixture<EscobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscobaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
