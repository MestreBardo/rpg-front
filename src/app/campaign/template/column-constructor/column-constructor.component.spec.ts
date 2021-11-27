import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnConstructorComponent } from './column-constructor.component';

describe('ColumnConstructorComponent', () => {
  let component: ColumnConstructorComponent;
  let fixture: ComponentFixture<ColumnConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
