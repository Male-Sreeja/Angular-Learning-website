import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private Location:LocationStrategy) { 
    history.pushState(null,' ',window.location.href);
    this.Location.onPopState(() => {

      history.pushState(null,' ', window.location.href);
      
      });
  }

  ngOnInit(): void {
  }

}
