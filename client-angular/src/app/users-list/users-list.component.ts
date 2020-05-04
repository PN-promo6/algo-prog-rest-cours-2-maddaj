import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any;

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
  }
}
