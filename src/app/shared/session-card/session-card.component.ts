import { Component, Input, OnInit } from '@angular/core';
import { faCalendar, faArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.sass']
})
export class SessionCardComponent implements OnInit {

  @Input() session: any = {sessionDate: Date.now()};
  faCalendar = faCalendar;
  faArrowDown = faArrowDown;
  faTrash = faTrash;
  
  constructor() { }

  ngOnInit(): void {
  }

  cancelSession(){

  }

  editSession(){}
}
