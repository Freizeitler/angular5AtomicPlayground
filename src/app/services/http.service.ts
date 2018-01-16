import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Data implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/data/data.json').subscribe(data => {
      return data;
    });
  }
}
