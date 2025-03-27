import { Component, OnInit } from '@angular/core';
import texts from '../../assets/texts.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  contactTitle = '';
  formData = { name: '', message: '' };
  submitted = false;

  ngOnInit() {
    this.contactTitle = texts.contact.title;
  }

  submitForm() {
    this.submitted = true;
  }
}
