import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCharacterRenderComponent } from './input-character-render.component';

describe('InputCharacterRenderComponent', () => {
  let component: InputCharacterRenderComponent;
  let fixture: ComponentFixture<InputCharacterRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCharacterRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCharacterRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
