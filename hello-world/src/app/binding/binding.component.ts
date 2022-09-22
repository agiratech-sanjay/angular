import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
    public greet = "";
    public ids= "myid"
    public errs = true;
    public titleBind = {
      color: "purple",
      fontStyle: "italic"
    }
  constructor() { }

  ngOnInit(): void {
  }

  onclick(event: any){
    console.log(event);
    this.greet = "Angular Event Binding";
  }
}
