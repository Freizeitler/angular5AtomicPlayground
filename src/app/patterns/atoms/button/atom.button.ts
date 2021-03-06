/**
 * @name: AtomButton
 * @desc: Can be a button or an anchor, depending on the parameter set.
 * @param:
 * button: $boolean (true: button elem, false: anchor elem)
 * buttonText: $string
 * path: $string (only relevant if elem is an anchor)
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './atom.button.html',
  styleUrls: ['./css/atom.button.scss']
})

export class AtomButton {
  @Input() buttonText: string;
  @Input() button: boolean;
  @Input() path: string;
}
