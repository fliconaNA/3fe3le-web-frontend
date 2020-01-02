import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {

    let post:{}={
      author:'Frank Licona',
      daceCreated: new Date().getDate(),
      title: 'Este es un post de prueba',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, quas molestias incidunt a neque modi assumenda voluptate quam laborum quidem provident accusantium quae aliquid deserunt minima reprehenderit distinctio minus ullam.'
    
    }
  }

}
