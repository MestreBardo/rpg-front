import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  form: string = 'login';
  constructor(private activateRoute: ActivatedRoute) { 
    this.activateRoute.params.subscribe(params => {
      this.form = params['form'] || 'login';
    });
  }

  ngOnInit(): void {

  }

}
