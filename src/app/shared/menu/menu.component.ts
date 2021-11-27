import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  isEditingUser = false;
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
  searchForms = this.formBuilder.group({
    search: ['']
  })
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { 
    
  }

  

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchForms.setValue({ search: params.text || "" });
    });
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  editingUser(param: any) {
    this.isEditingUser = param;
  }

  searchGroup() {
    this.router.navigate(['/search'], {
      queryParams: { text: this.searchForms.value.search },
      queryParamsHandling: 'merge'
    });
  }

}
