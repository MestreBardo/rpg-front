import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-render',
  templateUrl: './input-render.component.html',
  styleUrls: ['./input-render.component.sass']
})
export class InputRenderComponent implements OnInit {
  @Input() field: any;
  constructor() { }

  ngOnInit(): void {
  }

}
