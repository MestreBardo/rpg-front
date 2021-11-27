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

  template = {
    type: "column",
    size: "12",
    index: 0,
    childrens: [

    ],
    actualIndex: 1,
  }
  constructor(private templateService: TemplateService) { 
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


  createOnColumn(evento: any) {
    this.template.actualIndex++;
    switch (evento) {
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
            size: "6",
            childrens: [
            ],
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
