import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbacupComponent } from './appbacup.component';

describe('AppbacupComponent', () => {
  let component: AppbacupComponent;
  let fixture: ComponentFixture<AppbacupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppbacupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbacupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
