import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from './../../../services/campaign.service';
import { TemplateService } from './../../../services/template.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.sass']
})
export class TemplateComponent implements OnInit {
  rowConstructorEnabled = false;
  rowConstructorPosition = ["0px","0px"];
  columnConstructorEnabled = false;
  columnConstructorPosition = ["0px","0px"];
  indexSolicited = 0;
  sonIndexSolicited = 0;
  campaignId = "";

  template = {
    type: "column",
    size: "12",
    index: 0,
    childrens: [

    ],
    actualIndex: 1,
  }
  constructor(private templateService: TemplateService, private campaignService: CampaignService, private activeRoute: ActivatedRoute, private toaster: ToastrService) { 
    this.activeRoute.params.subscribe(params => {
      this.campaignId = params.id;
    });
    this.templateService.showConstructor.subscribe(evento => {
      this.indexSolicited = evento.index;
      switch(evento.type) {
        case "row":
          this.showRowConstructor(evento);
          break;
        case "column":
          this.showColumnConstructor(evento);
          break;
      }
    });
  }
  log(c: any) {
    console.log(this.template);
  }

  ngOnInit(): void {
  }
  showRowConstructor(evento: any) {
    this.rowConstructorPosition = [evento.y + "px", evento.x + "px"];
    this.rowConstructorEnabled = true;
  }


  showColumnConstructor(evento: any) {
    this.columnConstructorPosition = [evento.y + "px", evento.x + "px"];
    this.columnConstructorEnabled = true;
  }

  saveNewTemplate() {
    this.campaignService.saveTemplate(this.campaignId, this.template).subscribe(
      (response) => { this.toaster.success("Template salvo com sucesso!"); },
      (error) => { this.toaster.error("Erro ao salvar template!"); }
    );
  }


  createOnColumn(evento: any) {
    this.template.actualIndex++;
    switch (evento.type) {
      case "line":
        this.templateService.createOn.emit({
          toCreate: {
            type: "row",
            childrens: [
            ],
            index: this.template.actualIndex,
          },
          index: this.indexSolicited,
        });

      break;
      case "column":
        this.templateService.createOn.emit({
          toCreate: {
            type: "column",
            size: evento.size,
            childrens: [
            ],
            index: this.template.actualIndex,
          },
          index: this.indexSolicited,
        });
        break;
      case "input":
        this.templateService.createOn.emit({
          toCreate: {
            type: "input",
            label: "default",
            inputed: "",
            typeInput: "text",
            index: this.template.actualIndex,
          },
          index: this.indexSolicited,
        });
        break;
      case "text":
          this.templateService.createOn.emit({
            toCreate: {
              type: "text",
              inputed: "",
              label: "default",
              index: this.template.actualIndex,
            },
            index: this.indexSolicited,
          });
          break;
      case "list":
        this.templateService.createOn.emit({
          toCreate: {
            type: "list",
            label: "default",
            items: [],
            index: this.template.actualIndex,
          },
          index: this.indexSolicited,
        });
        break;
    }
    this.columnConstructorEnabled = false;
    this.rowConstructorEnabled = false;
  }

  

}
