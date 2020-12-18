import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEnrolleeComponent } from './modify-enrollee.component';

describe('ModifyEnrolleeComponent', () => {
  let component: ModifyEnrolleeComponent;
  let fixture: ComponentFixture<ModifyEnrolleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyEnrolleeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEnrolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
