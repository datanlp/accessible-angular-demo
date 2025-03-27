import { Component } from '@angular/core';
import texts from '../../assets/texts.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contactTitle = texts.contact.title;
  submitted = false;
  form = {
    name: '',
    message: ''
  };

  onSubmit() {
    this.submitted = true;
  }
}