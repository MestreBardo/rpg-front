import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-row-constructor',
  templateUrl: './row-constructor.component.html',
  styleUrls: ['./row-constructor.component.sass']
})
export class RowConstructorComponent implements OnInit {
  @Output() create = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
