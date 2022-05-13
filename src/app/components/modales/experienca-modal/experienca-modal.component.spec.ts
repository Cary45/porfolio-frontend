import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencaModalComponent } from './experienca-modal.component';

describe('ExperiencaModalComponent', () => {
  let component: ExperiencaModalComponent;
  let fixture: ComponentFixture<ExperiencaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
