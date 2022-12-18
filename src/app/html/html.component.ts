import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
  html_comments:any;
  user:any;
  user1:any;
  allh_comments:any;
  constructor(private service:UserService,private httpClient:HttpClient) {
    this.html_comments = {id:"",email:"",comment:""};
   }

  ngOnInit(): void {
    this.user=localStorage.getItem("Users");
    this.user1 = JSON.parse(this.user);
  } 
  htAddComment(cForm:any){
    this.html_comments.email=this.user1.email;
    console.log(this.html_comments.email);
    this.html_comments.comment=cForm.comment;
    // console.log(this.comments.email);
    console.log(this.html_comments.comment);
    if(Object.keys(this.html_comments.comment).length===0){
      alert("Type Text!");
    }else{
      this.service.htmlAddComment(this.html_comments).subscribe();
      alert("Comment Added");
    }
  }
  htShowComments(){
    this.service.htShowComments().subscribe((result)=>{this.allh_comments=result;});
  }

}
