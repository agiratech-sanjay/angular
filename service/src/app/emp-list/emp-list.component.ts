import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

 
  public employees:any = [];

  constructor(private _empservice : EmpserviceService) { }

  ngOnInit(){
     this._empservice.getemployees()
     .subscribe(data =>this.employees = data);
  }

}
