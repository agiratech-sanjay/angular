import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive_login';
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

}
