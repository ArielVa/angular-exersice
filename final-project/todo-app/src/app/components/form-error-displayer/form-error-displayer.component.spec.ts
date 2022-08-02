import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorDisplayerComponent } from './form-error-displayer.component';

describe('FormErrorDisplayerComponent', () => {
  let component: FormErrorDisplayerComponent;
  let fixture: ComponentFixture<FormErrorDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErrorDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
