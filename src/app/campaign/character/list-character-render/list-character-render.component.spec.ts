import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacterRenderComponent } from './list-character-render.component';

describe('ListCharacterRenderComponent', () => {
  let component: ListCharacterRenderComponent;
  let fixture: ComponentFixture<ListCharacterRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharacterRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCharacterRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
