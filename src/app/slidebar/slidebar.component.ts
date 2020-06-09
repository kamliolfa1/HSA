import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss']
})
export class SlidebarComponent implements OnInit {
  links = ['Topics', 'Bots', 'People'];
  activeLink = this.links[0];
  background = '';
  constructor() {
   }
  ngOnInit(): void {
  }

}
