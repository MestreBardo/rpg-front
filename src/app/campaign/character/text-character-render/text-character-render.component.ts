import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-character-render',
  templateUrl: './text-character-render.component.html',
  styleUrls: ['./text-character-render.component.sass']
})
export class TextCharacterRenderComponent implements OnInit {

  @Input() field: any;
  constructor() { }

  ngOnInit(): void {
  }

}
