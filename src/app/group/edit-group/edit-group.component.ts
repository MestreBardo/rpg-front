import { GroupsService } from './../../../services/groups.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.sass']
})
export class EditGroupComponent implements OnInit {
  @Input() group: any
  @Output() finishEditingGroup = new EventEmitter<any>();
  faTimes = faTimes;
  constructor(
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private groupsService: GroupsService
  ) { }

  editGroupNameForms = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
  });

  editGroupInfoForms = this.formBuilder.group({
    description: ['', [Validators.required, Validators.minLength(3)]],
  })
  ngOnInit(): void {
    this.editGroupNameForms.controls.name.setValue(this.group.name);
    this.editGroupInfoForms.controls.description.setValue(this.group.description);
  }


  editGroupName() {
    this.groupsService.editGroupName(this.group.id, this.editGroupNameForms.value).subscribe(
      (res: any) => {
        console.log(res);
        this.toaster.success(`Grupo editado`, "Sucesso");
      },
      (err: any) => {
        this.toaster.error(err.error.data, "Erro");
      }
    )
  }

  editGroupInfo() {
    this.groupsService.editGroupInfo(this.group.id, this.editGroupInfoForms.value).subscribe(
      (res: any) => {
        console.log(res);
        this.toaster.success(`Grupo editado`, "Sucesso");
      },
      (err: any) => {
        this.toaster.error(err.error.data, "Erro");
      }
    )
  }

}
