import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCharacterRenderComponent } from './text-character-render.component';

describe('TextCharacterRenderComponent', () => {
  let component: TextCharacterRenderComponent;
  let fixture: ComponentFixture<TextCharacterRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCharacterRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCharacterRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
