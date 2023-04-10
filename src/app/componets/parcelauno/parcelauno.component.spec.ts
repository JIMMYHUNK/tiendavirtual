import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelaunoComponent } from './parcelauno.component';

describe('ParcelaunoComponent', () => {
  let component: ParcelaunoComponent;
  let fixture: ComponentFixture<ParcelaunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelaunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
