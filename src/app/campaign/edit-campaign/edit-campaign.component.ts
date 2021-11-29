import { CampaignService } from './../../../services/campaign.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { GroupsService } from 'src/services/groups.service';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.sass']
})
export class EditCampaignComponent implements OnInit {

  @Input() campaign: any
  @Output() finishEditingCampaign = new EventEmitter<any>();
  faTimes = faTimes;
  constructor(
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private campaignService: CampaignService
  ) { }

  editCampaignNameForms = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    group: ["", [Validators.required]]
  });

  editCampaignInfoForms = this.formBuilder.group({
    system: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
  })
  ngOnInit(): void {
    this.editCampaignNameForms.controls.name.setValue(this.campaign.name);
    this.editCampaignNameForms.controls.group.setValue(this.campaign.group);
    this.editCampaignInfoForms.controls.system.setValue(this.campaign.system);
    this.editCampaignInfoForms.controls.description.setValue(this.campaign.description);
  }


  editGroupName() {
    this.campaignService.editCampaignName(this.campaign.id, this.editCampaignNameForms.value).subscribe(
      (res: any) => {
        this.toaster.success(`Campanha editada`, "Sucesso");
      },
      (err: any) => {
        this.toaster.error(err.error.data, "Erro");
      }
    )
  }

  editGroupInfo() {
    this.campaignService.editCampaignInfo(this.campaign.id, this.editCampaignInfoForms.value).subscribe(
      (res: any) => {
        this.toaster.success(`Campanha editado`, "Sucesso");
      },
      (err: any) => {
        this.toaster.error(err.error.data, "Erro");
      }
    )
  }

}
