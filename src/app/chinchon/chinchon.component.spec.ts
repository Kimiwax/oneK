import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinchonComponent } from './chinchon.component';

describe('ChinchonComponent', () => {
  let component: ChinchonComponent;
  let fixture: ComponentFixture<ChinchonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChinchonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChinchonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
