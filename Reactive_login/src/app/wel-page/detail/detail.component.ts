import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdService } from 'src/app/prod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public product:any;
  public productid:any;
  constructor(public active:ActivatedRoute,public productService:ProdService,public route:Router) { }

  ngOnInit(): void {
    this.productid=this.active.snapshot.params["id"];
    this.product=this.productService.item.find(x => x.id == this.productid);
    console.log(this.product);
  }

  backhome(){
    return this.route.navigate(["welpage"]);
  }

}
