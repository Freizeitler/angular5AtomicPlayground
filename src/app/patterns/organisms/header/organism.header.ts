import { Component, Input } from '@angular/core';

@Component({
  selector: 'organism-header',
  templateUrl: './organism.header.html',
  styleUrls: ['./css/organism.header.scss']
})

export class OrganismHeader {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() buttonText: string;
  @Input() path: string;
  constructor() { }
}
