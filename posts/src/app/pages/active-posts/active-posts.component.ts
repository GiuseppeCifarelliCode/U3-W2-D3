import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {
  posts:Post[] = this.getPosts()
  constructor(private postSvc:PostService){}

  getPosts():Post[]{
    this.postSvc.ngOnInit()
    return this.postSvc.getPosts()
  }

  removePost(id:number):void{
    this.postSvc.editPosts(id)
    this.posts = this.posts.filter(post => post.id !== id)
  }
}
