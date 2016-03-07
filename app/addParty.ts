import {Component, Inject} from 'angular2/core';
import {PartyActions} from './partyActions';

@Component({
  selector: 'add-party',
  template:
    `<div>
      <input #party>
      <button (click)="addParty(party)">Add Party</button>
    </div>`
})
export class AddParty {
  constructor(
    @Inject('AppStore') private appStore: AppStore,
    private partyActions: PartyActions
  ){ }

  private addParty(input) {
    this.appStore.dispatch(this.partyActions.addParty(input.value));
    input.value = '';
  }
}
