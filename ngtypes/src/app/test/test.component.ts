import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayname = true;
  color = "green";
  public colors = ["red","blue","green","yellow"];

  @Input('parentData') public abc:any; 
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Event goes to parent too');
  }
}
