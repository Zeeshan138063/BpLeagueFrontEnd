import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredRefreeComponent } from './registered-refree.component';

describe('RegisteredRefreeComponent', () => {
  let component: RegisteredRefreeComponent;
  let fixture: ComponentFixture<RegisteredRefreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredRefreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredRefreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
