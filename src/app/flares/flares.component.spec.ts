import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaresComponent } from './flares.component';

describe('FlaresComponent', () => {
  let component: FlaresComponent;
  let fixture: ComponentFixture<FlaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
