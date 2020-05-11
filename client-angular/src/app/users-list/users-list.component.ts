import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data-service/data.service';
import { User } from '../models/user/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchUsers()
      .subscribe(
        res => {
          this.users = res;// permet de récupérer dans une variable les données stockées dans l'observable 
        },
        error => {
          console.log(error)
        },
      )

    this.dataService.fetchUserById("5eaecda0ba6003ab1113ceac")
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error)
        },
      )
  }
}
