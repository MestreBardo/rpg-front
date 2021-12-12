import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRenderComponent } from './character-render.component';

describe('CharacterRenderComponent', () => {
  let component: CharacterRenderComponent;
  let fixture: ComponentFixture<CharacterRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
