import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  java_comments:any;
  user:any;
  user1:any;
  allJ_comments:any;
  constructor(private service:UserService,private httpClient:HttpClient) {
    this.java_comments = {id:"",email:"",comment:""};
   }

  ngOnInit(): void {
    this.user=localStorage.getItem("Users");
    this.user1 = JSON.parse(this.user);
  } 
  jAddComment(cForm:any){
    this.java_comments.email=this.user1.email;
    console.log(this.java_comments.email);
    this.java_comments.comment=cForm.comment;
    // console.log(this.comments.email);
    console.log(this.java_comments.comment);
    if(Object.keys(this.java_comments.comment).length===0){
      alert("Type Text!");
    }else{
      this.service.javaAddComment(this.java_comments).subscribe();
      alert("Comment Added");
    }
  }
  jShowComments(){
    this.service.jShowComments().subscribe((result)=>{this.allJ_comments=result;});
  }

}
