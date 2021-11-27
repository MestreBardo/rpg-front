import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCharactersComponent } from './campaign-characters.component';

describe('CampaignCharactersComponent', () => {
  let component: CampaignCharactersComponent;
  let fixture: ComponentFixture<CampaignCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
