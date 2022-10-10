import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-wel-page',
  templateUrl: './wel-page.component.html',
  styleUrls: ['./wel-page.component.css']
})
export class WelPageComponent implements OnInit {

  public  item:any;
  constructor(public product:ProdService,public route:Router) { }

  ngOnInit(): void {
    this.item=this.product.item;
  }

  function(i:any){
  this.route.navigate(['welpage/detail/',i.id])    
    // console.log("helo")
  }

}
