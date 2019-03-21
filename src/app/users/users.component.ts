import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any = [];
  loadedUsers: Array<object>;
  page: number;
  count: number;
  max_page: number;
  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.page = 1;
    this.count = 6;
    this.getUsers();
  }
  public getUsers() {
    this.userService.getUsers(this.page, this.count)
    .subscribe((data: any) => {
      this.loadedUsers = data.users;
      this.max_page = data.total_pages;
      this.loadedUsers.forEach(oneuser => {
        this.users.push(oneuser);
      });
    });


  }
  public addUsers(count) {
    this.count = count;
    this.page += 1;
    this.getUsers();
  }
}
