import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-index',
  templateUrl: './page.index.html',
  styleUrls: ['./css/page.index.scss']
})

export class PageIndex implements OnInit {
  title: string;
  subTitle: string;
  buttonText: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // NOTE: TS needs to know the called property of the object. Therefor we need to declare it in an interface
    interface DataResponse {
      index: any;
    }

    this.http.get<DataResponse>('/assets/data/data.json')
    .subscribe(data => {
      this.title = data.index.title;
      this.subTitle = data.index.subTitle;
      this.buttonText = data.index.buttonText;
    });
  }
}
