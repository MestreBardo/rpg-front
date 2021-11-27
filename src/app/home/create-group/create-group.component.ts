import { GroupsService } from './../../../services/groups.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.sass']
})
export class CreateGroupComponent implements OnInit {

  @Output() finishCreatingGroup = new EventEmitter<any>();
  constructor(
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private groupsService: GroupsService
  ) { }

  createGroupForms = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    description: [''],
    isPublic: [true]
  })
  ngOnInit(): void {
  }
  criarGrupo() {
    this.groupsService.createGroup(this.createGroupForms.value).subscribe(
      (res: any) => {
        console.log(res);
        this.toaster.success(`${res.data.name} criado`, "Sucesso");
        this.finishCreatingGroup.emit(false);
      },
      (err: any) => {
        this.toaster.error(err.error.data, "Erro");
      }
    )
  }

}
