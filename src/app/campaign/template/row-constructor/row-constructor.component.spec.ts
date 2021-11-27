import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowConstructorComponent } from './row-constructor.component';

describe('RowConstructorComponent', () => {
  let component: RowConstructorComponent;
  let fixture: ComponentFixture<RowConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
