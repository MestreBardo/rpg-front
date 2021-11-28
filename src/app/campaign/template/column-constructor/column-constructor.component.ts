import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-column-constructor',
  templateUrl: './column-constructor.component.html',
  styleUrls: ['./column-constructor.component.sass']
})
export class ColumnConstructorComponent implements OnInit {
  @Output() create = new EventEmitter<any>();
  constructor() { }
  sizeColumn = 1;

  crateColumn() {
    this.create.emit({type: 'column', size: this.sizeColumn});
  }
  ngOnInit(): void {
  }

}
