import { Component, Input, OnInit } from '@angular/core';
import { faTrash, faCalendar, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.sass']
})
export class MemberCardComponent implements OnInit {
  @Input() member: any;
  @Input() userSigned: any;
  faTrash = faTrash;
  faCalendar = faCalendar;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  constructor() { }

  ngOnInit(): void {
    console.log(this.userSigned);
  }

}
