import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos:Video[] = [
    {"_id":"1", "title":"Title 1", "url":"Url 1", "description":"Desc1"},
    {"_id":"2", "title":"Title 2", "url":"Url 2", "description":"Desc1"},
    {"_id":"3", "title":"Title 3", "url":"Url 3", "description":"Desc1"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
