/**
 * @name: AppRouter
 * @desc: This component exists only for the routing functionality and to hold <router-outlet>
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router',
  templateUrl: './app.router.html'
})

export class AppRouter implements OnInit {

  constructor() { }
  ngOnInit(): void { }

}
