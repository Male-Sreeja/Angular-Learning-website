import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../user.service';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit {
  addi_details : any;
  constructor(private router:Router,private service:UserService) {
    this.addi_details={email:'',bplace:'',hschool:'',fcolor:''};
   }
   addDet(addDetForm:any):void{
    this.addi_details.email=addDetForm.email;
    this.addi_details.bplace=addDetForm.bplace;
    this.addi_details.hschool=addDetForm.hschool;
    this.addi_details.fcolor=addDetForm.fcolor;
    this.service.checkAddDetails(this.addi_details).subscribe((results:any)=>this.checkDet(results));
  }
  checkDet(result:any):void{
    console.log(result);
    if(result===null){
      alert("Action required");
    }else{
      this.router.navigate(['/changePwd']);
    }
  }
  ngOnInit(): void {
  }

}
