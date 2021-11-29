import { GroupsService } from './../../services/groups.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faSadCry } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  groups: any = [];
  faSadCry = faSadCry;
  constructor(private activatedRoute: ActivatedRoute, private groupService: GroupsService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.foundGroups(params.text || '');
    });
  }

  ngOnInit(): void {
  }

  foundGroups(text: string) {
    this.groupService.findGroups(text).subscribe(
      (received: any) => {
        this.groups = received.data.map((data: any) =>{
          return {
            info: {
              id: data._id,
              name: data.name,
              description: data.description,
              userCount: data.userCount,
              isPublic: data.isPublic,
              createdAt: data.createdAt,
              owner: data.owner,
            },
            role: data.me?.role || null,
            joinedAt: data.me?.joinedAt || null
          }
        })
      }
    );
  }

}
