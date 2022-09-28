import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  public employees: any = [];

  constructor(private _empservice : EmpserviceService) { }

  ngOnInit(){
    this._empservice.getemployees()
    .subscribe(data =>this.employees = data);
 }
}
