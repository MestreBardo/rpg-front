import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.sass']
})
export class AddSessionComponent implements OnInit {
  
  @Input() campaignId: string = "";
  @Output() finishCreatingSession = new EventEmitter<any>();
  faTimes = faTimes;
  constructor(
    private formBuilder: FormBuilder, private toaster: ToastrService, private sessionService: SessionService
  ) { }

  createSessionForm = this.formBuilder.group({
    sessionDate: ['', [Validators.required]]
  });
  ngOnInit(): void {

  }


  createCampaign() {
    this.sessionService.createSession({...this.createSessionForm.value, campaign: this.campaignId}).subscribe(
      (data) => {
        this.toaster.success("Campaign created successfully");
        this.finishCreatingSession.emit(false);
      },
      error => {
        this.toaster.error("Error creating campaign");
      }
    )
  }

}
