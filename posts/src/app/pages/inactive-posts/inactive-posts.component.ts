import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})

export class InactivePostsComponent {
  posts:Post[] = this.getPosts()
  constructor( private postSvc:PostService){}

  getPosts():Post[]{
    this.postSvc.ngOnInit()
    return this.postSvc.getPosts()
  }

  addPost(id:number):void{
    this.posts = this.posts.filter(post => post.id !== id)
  }
}
