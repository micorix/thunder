import { Component, OnInit } from '@angular/core';

require('dotenv').config();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
  ){}


  ngOnInit() {
    };

//process.env.LOGIN

  showAlert(){
//
  }


}
