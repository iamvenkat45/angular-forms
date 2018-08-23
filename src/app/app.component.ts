import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  formData;

  user = {
    name: {
      firstName: '',
      lastname: 'Sandeep',
    },
    isMajor: 'false'
  };

  onSubmit(form) {
    // this.formData = formValue;
    // this.user.firstName = 'Vijay';
    form.reset();
    console.log(form);
  }

  onChanges(data) {
    console.log(data);
  }

  onRadioChange(data) {
    console.log(data);
  }
}
