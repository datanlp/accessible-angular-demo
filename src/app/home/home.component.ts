import { Component, OnInit } from '@angular/core';
import texts from '../../assets/texts.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  homeTitle = '';
  homeText = '';

  ngOnInit() {
    this.homeTitle = texts.home.title;
    this.homeText = texts.home.text;
  }

  scrollDown() {
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  }
}
