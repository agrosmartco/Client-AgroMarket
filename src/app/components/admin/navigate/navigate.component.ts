import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  usuario: string;
  conversionDecryptOutput: string;

  constructor() { }



  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('allEntries');
  }

}
