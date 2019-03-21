import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  menu_items = [
    {name: 'About me', link: '#aboutme'},
    {name: 'Relationships', link: '#relationships'},
    {name: 'Requirements', link: '#requirements'},
    {name: 'Users', link: '#'},
    {name: 'Sign Up', link: '#'}
  ];
  currentUserInfo: object;
  isLoading: boolean;
  constructor(private currentUserService: UserService,
    ) {

   }

  ngOnInit() {
    this.isLoading = true;
    this.getCurrentUser();
  }

  public getCurrentUser() {
    this.currentUserService.getCurrentUser('1')
    .subscribe((data: any) => {
      this.currentUserInfo = data.user;
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

}
