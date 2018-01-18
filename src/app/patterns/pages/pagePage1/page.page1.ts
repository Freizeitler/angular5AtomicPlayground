/**
 * @name: Page1
 * @description: This is a real page example. Here we're fetching the data from data.json and pass them to the lower components
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-page1',
  templateUrl: './page.page1.html',
  styleUrls: ['./css/page.page1.scss']
})

export class PagePage1 implements OnInit {
  title: string;
  subTitle: string;
  buttonText: string;
  path: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // NOTE: TS needs to know the called property of the object. Therefor we need to declare it in an interface
    interface DataResponse {
      page1: any;
    }

    this.http.get<DataResponse>('/assets/data/data.json')
    .subscribe(data => {
      this.title = data.page1.title;
      this.subTitle = data.page1.subTitle;
      this.buttonText = data.page1.buttonText;
      this.path = data.page1.path;
    });
  }
}
