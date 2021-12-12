import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-character-render',
  templateUrl: './list-character-render.component.html',
  styleUrls: ['./list-character-render.component.sass']
})
export class ListCharacterRenderComponent implements OnInit {

  @Input() field: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.field);
  }


}
