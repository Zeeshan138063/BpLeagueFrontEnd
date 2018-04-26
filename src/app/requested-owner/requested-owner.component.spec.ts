import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedOwnerComponent } from './requested-owner.component';

describe('RequestedOwnerComponent', () => {
  let component: RequestedOwnerComponent;
  let fixture: ComponentFixture<RequestedOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
