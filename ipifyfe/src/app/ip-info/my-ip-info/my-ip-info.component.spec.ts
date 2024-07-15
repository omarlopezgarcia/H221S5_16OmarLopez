import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIpInfoComponent } from './my-ip-info.component';

describe('MyIpInfoComponent', () => {
  let component: MyIpInfoComponent;
  let fixture: ComponentFixture<MyIpInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyIpInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyIpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
