import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addi-details',
  templateUrl: './addi-details.component.html',
  styleUrls: ['./addi-details.component.css']
})
export class AddiDetailsComponent implements OnInit {
  addi_details:any;
  constructor(private httpClient:HttpClient,private service:UserService,private router:Router) {
    this.addi_details={email:'',bplace:'',hschool:'',fcolor:''};
   }
   addDet(addDetForm:any){
     this.addi_details.email=addDetForm.email;
     this.addi_details.bplace=addDetForm.bplace;
     this.addi_details.hschool=addDetForm.hschool;
     this.addi_details.fcolor=addDetForm.fcolor;
     this.service.addAddiDetails(this.addi_details).subscribe();
     this.router.navigate(['/login']);
   }

  ngOnInit(): void {
  }

}
