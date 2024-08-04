import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalosComponent } from './palos.component';

describe('JugueteComponent', () => {
  let component: PalosComponent;
  let fixture: ComponentFixture<PalosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalosComponent]
    });
    fixture = TestBed.createComponent(PalosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
