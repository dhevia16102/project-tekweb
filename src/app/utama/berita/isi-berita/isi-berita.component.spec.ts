import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsiBeritaComponent } from './isi-berita.component';

describe('IsiBeritaComponent', () => {
  let component: IsiBeritaComponent;
  let fixture: ComponentFixture<IsiBeritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsiBeritaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsiBeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
