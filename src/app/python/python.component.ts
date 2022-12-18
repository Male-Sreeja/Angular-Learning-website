import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {
  comments:any;
  user:any;
  user1:any;
  all_comments:any;
  constructor(private service:UserService,private httpClient:HttpClient) {
    this.comments = {id:"",email:"",comment:""};
    // this.user = {_id:"",sname:"",email:"",password:""};
   }

  ngOnInit(): void {
    
    this.user=localStorage.getItem("Users");
    this.user1 = JSON.parse(this.user);
    // this.u_email=[{email: this.user.email}];
  }
  addComment(discussionForm:any){
    this.comments.email=this.user1.email;
    console.log(this.comments.email);
    this.comments.comment=discussionForm.comment;
    // console.log(this.comments.email);
    console.log("comment"+this.comments.comment);
    if(Object.keys(this.comments.comment).length===0){
      alert("Type Text!");
    }else{
      this.service.addComment(this.comments).subscribe();
      alert("Comment Added");
    }
  }
  showComments(){
    this.service.showComments().subscribe((result)=>{this.all_comments=result;});
  }
}
