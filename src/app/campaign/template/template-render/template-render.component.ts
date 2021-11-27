import { TemplateService } from './../../../../services/template.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-render',
  templateUrl: './template-render.component.html',
  styleUrls: ['./template-render.component.sass']
})
export class TemplateRenderComponent implements OnInit {
  @Input() toRender: any;
  rowConstructorEnabled = false;
  rowConstructorPosition = ["0px","0px"];
  columnConstructorEnabled = false;
  columnConstructorPosition = ["0px","0px"];
  constructor(private templateService: TemplateService) { }

  ngOnInit(): void {
    this.templateService.createOn.subscribe(evento => {
      if (this.toRender.index == evento.index) {
        this.toRender.childrens.push({
          ...evento.toCreate,
        });
      }
    });


  }

  openRow(evento: any) {
    const contains = evento.target.classList.contains('template' + this.toRender.index);
    if(!contains)
      return;
    this.templateService.showConstructor.emit({
      type: "row",
      x: evento.x,
      y: evento.y,
      index: this.toRender.index,
      sonIndex: this.toRender.sonIndex
    })
  }

  openColumn(evento: any) {
    const contains = evento.target.classList.contains('template' + this.toRender.index) || evento.target.classList.value === "";
    if(!contains )
      return;
    this.templateService.showConstructor.emit({
      type: "column",
      x: evento.x,
      y: evento.y,
      index: this.toRender.index,
      sonIndex: this.toRender.sonIndex
    })
  }

  addChildren(event: any) { 
    this.toRender.childrens.push("line");
  }

  createOnColumn(evento: any) {
   
    this.rowConstructorEnabled = false;
  }

}
