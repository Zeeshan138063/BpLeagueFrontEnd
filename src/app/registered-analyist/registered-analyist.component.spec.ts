import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredAnalyistComponent } from './registered-analyist.component';

describe('RegisteredAnalyistComponent', () => {
  let component: RegisteredAnalyistComponent;
  let fixture: ComponentFixture<RegisteredAnalyistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredAnalyistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredAnalyistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
