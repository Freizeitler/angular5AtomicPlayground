/**
 * @name: OrganismHeader
 * @description: An exampole for an organism. We're receiving and passing data through context (params).
 * @param:
 * title: $string
 * subTitle: $string
 * buttonText: $string
 * path: $string
 */

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
