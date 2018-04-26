import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedAnalyistComponent } from './requested-analyist.component';

describe('RequestedAnalyistComponent', () => {
  let component: RequestedAnalyistComponent;
  let fixture: ComponentFixture<RequestedAnalyistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedAnalyistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedAnalyistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
