import { Injectable, OnInit } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {

  posts:Post[] = []
  constructor(){}

  ngOnInit(){
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(data  => data.forEach((element:Post) => {
      this.posts.push(element)
    })
    )
    .catch(err => alert(err))
  }

  getPosts():Post[]{
    this.posts = []
    return this.posts
  }

 url: string = 'http://localhost:3000/posts'
  editPosts(post:Post){
    post.active = post.active === true ? false : true
    fetch(this.url + '/' + post.id, {
      method: 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => res.json())
    .then(data => console.log(data)
    )
  }
}
