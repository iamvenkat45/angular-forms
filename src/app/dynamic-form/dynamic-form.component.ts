import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  signInForm: FormGroup;
  constructor() { }


  // user = {
  //   name: {
  //     firstName: '',
  //     lastName: ''
  //   },
  //   age: '',
  //   gender: '',
  //   addrtess: {
  //     city: '',
  //     state: ''
  //   }
  // }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'userName': new FormGroup({
        'firstName': new FormControl('venkat', [Validators.required, Validators.minLength(3), this.validateNames]),
        'lastName': new FormControl(null),
      }),
      'age': new FormControl(null, [Validators.required, this.validateAge])
    });


    this.signInForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
    this.subscribeToFirstNameChange();
  }

  subscribeToFirstNameChange() {
    this.signInForm.get('userName.firstName').valueChanges.subscribe((data) => {
      console.log('value is changed, you can make a service call', data);
    });
  }


  validateAge(control: FormControl) {
    if (control.value && control.value < 18 && control.value > 50) {
      return { ageRangeError: true };
    }
    return null;
  }

  validateNames(firstNamecontrol: FormControl) {
    const forbiddenNames = ['test'];
    if (firstNamecontrol.value && forbiddenNames.indexOf(firstNamecontrol.value) !== -1) {
      return { forbiddenName: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.signInForm);
  }

}
