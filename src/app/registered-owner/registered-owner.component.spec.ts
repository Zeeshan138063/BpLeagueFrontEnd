import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredOwnerComponent } from './registered-owner.component';

describe('RegisteredOwnerComponent', () => {
  let component: RegisteredOwnerComponent;
  let fixture: ComponentFixture<RegisteredOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
