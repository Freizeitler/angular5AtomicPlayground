/**
 * @name: AppComponent
 * @desc: This component exists only for the routing functionality and to hold <router-outlet>
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

}
