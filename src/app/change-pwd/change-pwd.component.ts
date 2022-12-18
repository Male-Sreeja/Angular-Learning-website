import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {
  userdetails : any;
  constructor(private httpClient:HttpClient,private service:UserService,private router:Router) {
    this.userdetails={email:'',password:''};
   }
   newPwd(pwdForm:any):void{
     if(pwdForm.pwd===pwdForm.c_pwd){
       this.userdetails.email=pwdForm.email;
       this.userdetails.password=pwdForm.pwd;
       console.log(this.userdetails);
       this.service.changePassword(this.userdetails).subscribe();
      alert("Your password has been changed");
      this.router.navigate(['/login']);
     }else{
       alert("Re-enter your password");
       this.router.navigate(['/changepwd']);
     }
   }
  ngOnInit(): void {
  }

}
