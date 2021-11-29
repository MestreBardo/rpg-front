import { CampaignService } from './../../../services/campaign.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.sass']
})
export class CreateCampaignComponent implements OnInit {
  @Input() groupId: string = "";
  @Output() finishCreatingCampaign = new EventEmitter<any>();
  faTimes = faTimes;
  constructor(private formBuilder: FormBuilder, private toaster: ToastrService, private campaignService: CampaignService) { }

  createCampaignForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required]],
    system: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }

  createCampaign() {
    this.campaignService.createCampaign({...this.createCampaignForm.value, group: this.groupId}).subscribe(
      (data) => {
        this.toaster.success("Campaign created successfully");
        this.finishCreatingCampaign.emit(false);
      },
      error => {
        this.toaster.error("Error creating campaign");
      }
    )
  }

}
