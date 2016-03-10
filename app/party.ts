import {Component, ContentChildren, Inject} from 'angular2/core';

@Component({
  selector: 'party',
  inputs: ['id'],
  template: `
    <li>
      <ng-content></ng-content>
    </li>
  `
})
export class Party { }
