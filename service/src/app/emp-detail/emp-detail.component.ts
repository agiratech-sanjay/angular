import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  public employees: any = [];
  public err_Msg: any;

  constructor(private _empservice : EmpserviceService) { }

  ngOnInit(): any{
    this._empservice.getemployees().subscribe({next:(data) => {this.employees=data},
      error:(erorr) => {this.err_Msg=erorr}
  })
}
}
