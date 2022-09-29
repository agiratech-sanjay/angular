import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

 
  public employees:any = [];
  public err_Msg: any;


  constructor(private _empservice : EmpserviceService) { }

  ngOnInit(): any{
    this._empservice.getemployees().subscribe({next:(data) => {this.employees=data},
      error:(erorr) => {this.err_Msg=erorr}
  })
}

}
