
import { Component, Injectable, OnInit } from '@angular/core';
import { UserSService } from 'src/app/service/user-s.service';
import { UserList } from 'src/app/UserList';
import { UserDetailComponent } from '../user-detail/user-detail.component';



@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {

  public getAllUsers: any;

  user: UserList


  constructor(private service: UserSService, private userDet: UserDetailComponent) { }

  ngOnInit(): void {
    this.service.ListAllUsers.subscribe(res => {
      this.getAllUsers = res.results
      console.log(this.getAllUsers)
    } 
    )
  }

  details(fname: string, lname: string, cell: string, email: string, picture: string){
    this.user = new UserList()
    this.user.fname = fname
    this.user.lname = lname
    this.user.cell = cell
    this.user.email = email
    this.user.picture = picture

    sessionStorage.setItem('detalhado', JSON.stringify(this.user))

  }


}
