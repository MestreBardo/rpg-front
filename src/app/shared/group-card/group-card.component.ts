import { Router } from '@angular/router';
import { faPlus, faUnlockAlt, faUsers, faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.sass']
})
export class GroupCardComponent implements OnInit {

  @Input() group: any = {name: "Default Name", description: "Default Description", isPublic: true};
  @Input() userSignedRole: string = "";
  faUnlockAlt = faUnlockAlt;
  faUsers = faUsers;
  faJournalWhills = faJournalWhills;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToGroup() {
    this.router.navigate(['/group', this.group._id || this.group.id]);
  }

}
