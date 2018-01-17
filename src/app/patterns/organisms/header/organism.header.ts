import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'organism-header',
  templateUrl: './organism.header.html',
  styleUrls: ['./css/organism.header.scss']
})

export class OrganismHeader implements OnInit {
  title: string;
  subTitle: string;
  passButtonText: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // NOTE: TS needs to know the called property of the object. Therefor we need to declare it in an interface
    interface DataResponse {
      header: any;
    }

    this.http.get<DataResponse>('/assets/data/data.json')
    .subscribe(data => {
      this.title = data.header.title;
      this.subTitle = data.header.subTitle;
      this.passButtonText = data.header.buttonText;
    });
  }
}
