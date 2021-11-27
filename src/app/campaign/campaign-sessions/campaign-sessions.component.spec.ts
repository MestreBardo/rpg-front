import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSessionsComponent } from './campaign-sessions.component';

describe('CampaignSessionsComponent', () => {
  let component: CampaignSessionsComponent;
  let fixture: ComponentFixture<CampaignSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
