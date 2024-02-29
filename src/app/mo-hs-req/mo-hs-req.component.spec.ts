import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoHsReqComponent } from './mo-hs-req.component';

describe('MoHsReqComponent', () => {
  let component: MoHsReqComponent;
  let fixture: ComponentFixture<MoHsReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoHsReqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoHsReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
