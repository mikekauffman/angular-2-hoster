import {Component, ContentChildren, Inject} from 'angular2/core';
import {PartyActions} from './partyActions';

@Component({
  selector: 'party',
  inputs: ['id'],
  template: `
    <li>
      <ng-content></ng-content>
    </li>
  `
})
export class Party {
  constructor(
    @Inject('AppStore') private appStore: AppStore,
    private partyActions: PartyActions
  ){ }
}
