import { Component, OnInit } from '@angular/core';
import { PostComponent } from "./post/post.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
