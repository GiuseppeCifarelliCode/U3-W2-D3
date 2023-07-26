import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[] = []
  constructor(){}

  ngOnInit(){
    fetch('../assets/db.json')
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

  editPosts(id:number){
    fetch('../assets/db.json', {
      method: 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(this.posts)
    }).then(res => res.json())
    .then(data => console.log(data)
    )
  }
}
