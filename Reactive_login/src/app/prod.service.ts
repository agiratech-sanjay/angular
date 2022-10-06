import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor() { }
  item=[
    {"id":"101","name":"mobile","image":"assets/images/mobile.jpeg"},
    {"id":"102","name":"pen","image":"assets/images/pen.jpg"},
    {"id":"103","name":"toy","image":"assets/images/bear.jpg"}
  ]
}
