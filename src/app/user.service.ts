import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private usersList = [];
  constructor() { }

  setUsersList(listItem) {
    this.usersList.push(listItem);
  }

  getUsersList() {
    return this.usersList;
  }

}
