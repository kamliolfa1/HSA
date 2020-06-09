import { Component, OnInit, inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TopicService } from '../topic.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogTopicComponent } from '../dialog-topic/dialog-topic.component';


@Component({
  selector: 'app-listtopics',
  templateUrl: './listtopics.component.html',
  styleUrls: ['./listtopics.component.scss']
})

export class ListtopicsComponent implements OnInit {
  animal: string;
  name: string;

  constructor( private topicserv: TopicService , public dialog: MatDialog) {}
  topicList = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    nav: true,
    navSpeed: 700,
    navText: [ 'PREVIOUS', 'NEXT' ],
    responsive: {
      0: {
        items: 0
      },
      100: {
        items: 1
      },
      300: {
        items: 3
      },
      450: {
        items: 4
      },
      600: {
        items: 5
      }
    },
  }
  openDialog()
  {
    this.dialog.open(DialogTopicComponent);
  }
  ngOnInit(): void {
    this.topicserv.getAllTopics().subscribe(
      result => {
        this.topicList = result;},
      error =>
      {console.log(error);});
  }
  }
