import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCalendar, faArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.sass']
})
export class SessionCardComponent implements OnInit {

  @Input() session: any = {sessionDate: Date.now()};
  @Input() me: any;
  @Output() onDeleteSession = new EventEmitter<any>();
  faCalendar = faCalendar;
  faArrowDown = faArrowDown;
  faTrash = faTrash;
  
  constructor(private sessionService: SessionService, private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  cancelSession(){
    this.sessionService.cancelSession(this.session._id).subscribe(
      (res: any) => {
        this.toaster.success('Session cancelled successfully');
        this.onDeleteSession.emit(this.session);
      },
      (error: any) => {
        this.toaster.error('Error cancelling session');
      }
    )
  }

  editSession(){}
}
