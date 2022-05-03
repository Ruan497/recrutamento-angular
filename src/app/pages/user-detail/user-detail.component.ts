import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { UserList } from 'src/app/UserList';


import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class UserDetailComponent implements OnInit {

  userDetail: UserList


  constructor() { }

  ngOnInit(): void {
    this.userDetail = JSON.parse(sessionStorage.getItem('detalhado') || '') as UserList
    console.log(this.userDetail)
  }
}


