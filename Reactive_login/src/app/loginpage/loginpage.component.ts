import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginform = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  });
  
  loginuser(){
    console.log(this.loginform.value); 
  }

  get user(){
    return this.loginform.get('user'); 
  }


  get password(){
    return this.loginform.get('password');
  }

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  welcome(){
    this.route.navigate(["welpage"])
  }

}
