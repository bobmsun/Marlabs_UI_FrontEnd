import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() public videos;
  @Output() public SelectVideo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vid:Video){
    
  }

}
