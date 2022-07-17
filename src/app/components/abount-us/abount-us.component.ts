import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-abount-us',
  templateUrl: './abount-us.component.html',
  styleUrls: ['./abount-us.component.css']
})
export class AbountUsComponent implements OnInit {

  public user: User;
  public userList: User[];

  constructor(private dataService: DataService) {
    this.user = dataService.user;
    this.userList = dataService.userList;
  }

  ngOnInit(): void {
  }

  public getUserId():number{
    return this.dataService.UserId;
  }

}
