import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPlayersComponent } from './campaign-players.component';

describe('CampaignPlayersComponent', () => {
  let component: CampaignPlayersComponent;
  let fixture: ComponentFixture<CampaignPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
