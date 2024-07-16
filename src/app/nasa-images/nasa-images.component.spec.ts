import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaImagesComponent } from './nasa-images.component';

describe('NasaImagesComponent', () => {
  let component: NasaImagesComponent;
  let fixture: ComponentFixture<NasaImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
