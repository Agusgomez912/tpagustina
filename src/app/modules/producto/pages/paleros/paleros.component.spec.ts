import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalerosComponent } from './paleros.component';

describe('PalerosComponent', () => {
  let component: PalerosComponent;
  let fixture: ComponentFixture<PalerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalerosComponent]
    });
    fixture = TestBed.createComponent(PalerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
