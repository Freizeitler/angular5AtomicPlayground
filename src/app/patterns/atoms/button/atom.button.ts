import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './atom.button.html',
  styleUrls: ['./css/atom.button.scss']
})

export class AtomButton {
  @Input() buttonText: string;
}
