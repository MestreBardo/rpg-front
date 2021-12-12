import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-character-render',
  templateUrl: './input-character-render.component.html',
  styleUrls: ['./input-character-render.component.sass']
})
export class InputCharacterRenderComponent implements OnInit {

  @Input() field: any;
  constructor() { }

  ngOnInit(): void {
  }


}
