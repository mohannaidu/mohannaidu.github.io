import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
@NgModule({
  imports: [
  ],
})
export class HomeComponent implements OnInit {
  subtitle = 'An audio guided travel';

  constructor() { }

  ngOnInit() {
  }
}
