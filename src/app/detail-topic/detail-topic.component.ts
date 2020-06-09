import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detail-topic',
  templateUrl: './detail-topic.component.html',
  styleUrls: ['./detail-topic.component.scss']
})
export class DetailTopicComponent implements OnInit {
  topicIn : {
    id: number ;
  };
  constructor( private topicserv: TopicService, private route: ActivatedRoute) {}
  topicList = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: true,
    navSpeed: 700,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 1
      },
      150: {
        items: 2
      },
      300: {
        items: 3
      },
      450: {
        items: 4
      },
      600: {
        items: 5
      },
      750: {
        items: 6
      },
      900: {
        items: 7
      },
      1050: {
        items: 8
      }
    },
  }
  ngOnInit(): void {
    this.topicserv.getAllTopics().subscribe(
      result => {
        this.topicList = result;},
      error =>
      {console.log(error);});

    this.topicIn =
    { id: this.route.snapshot.params['id'],
    };
    this.route.params.subscribe(
      (params: Params) =>
      {
        this.topicIn.id = params['id'];
      }
    )

  }
}
