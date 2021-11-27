import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCampaignsComponent } from './group-campaigns.component';

describe('GroupCampaignsComponent', () => {
  let component: GroupCampaignsComponent;
  let fixture: ComponentFixture<GroupCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
