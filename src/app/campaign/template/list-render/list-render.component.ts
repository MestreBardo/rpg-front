import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.sass']
})
export class ListRenderComponent implements OnInit {
  @Input() field: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.field);
  }

  addNewItem() {
    this.field.items.push({
      value: '',
    });
  }
  changeValue(event: any, index: number) {
    const value = event.target.value;
    this.field.items[index] = value;
  }
}
