import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithLabelIconComponent } from './button-with-label-icon.component';

describe('ButtonWithLabelIconComponent', () => {
  let component: ButtonWithLabelIconComponent;
  let fixture: ComponentFixture<ButtonWithLabelIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWithLabelIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWithLabelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
