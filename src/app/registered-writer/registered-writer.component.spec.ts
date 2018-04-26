import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredWriterComponent } from './registered-writer.component';

describe('RegisteredWriterComponent', () => {
  let component: RegisteredWriterComponent;
  let fixture: ComponentFixture<RegisteredWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
