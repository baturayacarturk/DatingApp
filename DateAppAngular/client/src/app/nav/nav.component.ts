import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any={}
  constructor(public accountService:AccountService, private router:Router, private toast:ToastrService) { }


  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next:_=>
        this.router.navigateByUrl('/members'),
      })

  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/')

  }

}