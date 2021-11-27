import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  lookingFor: string = 'groups';
  isCreatingGroup: boolean = false;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.lookingFor = params.look || 'groups';
    })
  }

  creatingGroup(creating: any) {
    this.isCreatingGroup = creating;
  }

  goTo(param: string) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { look: param },
        queryParamsHandling: 'merge'
      });    
  }

}
