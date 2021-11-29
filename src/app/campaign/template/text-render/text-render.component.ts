import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-render',
  templateUrl: './text-render.component.html',
  styleUrls: ['./text-render.component.sass']
})
export class TextRenderComponent implements OnInit {
  @Input() field: any;
  constructor() { }

  ngOnInit(): void {
  }

}
