import { Component, OnInit } from '@angular/core';
import texts from '../../assets/texts.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = '';
  text = '';

  ngOnInit() {
    this.title = texts.home.title;
    this.text = texts.home.text;
  }

  scrollToBottom() {
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  }
}