import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-render',
  templateUrl: './character-render.component.html',
  styleUrls: ['./character-render.component.sass']
})
export class CharacterRenderComponent implements OnInit {

  @Input() toRender: any;
  rowConstructorEnabled = false;
  rowConstructorPosition = ["0px","0px"];
  columnConstructorEnabled = false;
  columnConstructorPosition = ["0px","0px"];
  constructor() { }

  ngOnInit(): void {

  }




}
