import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIpInfoComponent } from './all-ip-info.component';

describe('AllIpInfoComponent', () => {
  let component: AllIpInfoComponent;
  let fixture: ComponentFixture<AllIpInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllIpInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllIpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
