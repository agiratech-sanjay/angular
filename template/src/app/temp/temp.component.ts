import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
   
  public two_bind = "";
  constructor() { }

  ngOnInit(): void {
  }
  
  message(value:any) {
 console.log(value);
}

  aler(value:any){
    window.alert(value);
  }

}