import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DukunganComponent } from './dukungan.component';

describe('DukunganComponent', () => {
  let component: DukunganComponent;
  let fixture: ComponentFixture<DukunganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DukunganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DukunganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
