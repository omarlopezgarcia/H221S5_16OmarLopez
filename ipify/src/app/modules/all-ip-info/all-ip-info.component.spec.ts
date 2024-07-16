import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIpInfoComponent } from './all-ip-info.component';

describe('AllIpInfoComponent', () => {
  let component: AllIpInfoComponent;
  let fixture: ComponentFixture<AllIpInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllIpInfoComponent]
    });
    fixture = TestBed.createComponent(AllIpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
