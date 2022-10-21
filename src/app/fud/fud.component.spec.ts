import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FUDComponent } from './fud.component';

describe('FUDComponent', () => {
  let component: FUDComponent;
  let fixture: ComponentFixture<FUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
