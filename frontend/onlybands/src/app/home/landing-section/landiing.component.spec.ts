import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandiingComponent } from './landiing.component';

describe('LandiingComponent', () => {
  let component: LandiingComponent;
  let fixture: ComponentFixture<LandiingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandiingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandiingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
