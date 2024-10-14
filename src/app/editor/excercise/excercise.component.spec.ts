import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerciseComponent } from './excercise.component';

describe('ExcerciseComponent', () => {
  let component: ExcerciseComponent;
  let fixture: ComponentFixture<ExcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
