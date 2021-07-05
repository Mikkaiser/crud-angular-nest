import { UserService } from './../../services/user.service';
import { IUser } from './../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: IUser[] = [];
  displayedColumns = ['id', 'name', 'cpf', 'phone'];

  ngOnInit(): void {
    this.getAll()    
  }

  getAll() : any {
    this.userService.getAll().subscribe(data => this.users = data);
  }

}
