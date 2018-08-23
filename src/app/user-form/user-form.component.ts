import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  professions = ['student', 'engineer', 'doctor', 'painter', 'farmer'];
  usersList = [];

  userForm;
  constructor(private userSerive: UserService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
      age: new FormControl(null, [Validators.required]),
      gender: new FormControl('male', [Validators.required]),
      profession: new FormControl('student', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.userForm);
    // this.usersList.push(this.userForm.value);
    this.userSerive.setUsersList(this.userForm.value);
    this.usersList = this.userSerive.getUsersList();
    this.userForm.reset();
  }

}
