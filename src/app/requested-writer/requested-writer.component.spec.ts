import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedWriterComponent } from './requested-writer.component';

describe('RequestedWriterComponent', () => {
  let component: RequestedWriterComponent;
  let fixture: ComponentFixture<RequestedWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
