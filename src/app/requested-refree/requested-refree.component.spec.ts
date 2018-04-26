import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedRefreeComponent } from './requested-refree.component';

describe('RequestedRefreeComponent', () => {
  let component: RequestedRefreeComponent;
  let fixture: ComponentFixture<RequestedRefreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedRefreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedRefreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
