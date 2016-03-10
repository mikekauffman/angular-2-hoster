import {Component, Inject} from 'angular2/core';
import {PartyActions} from './partyActions';
import {PartyService} from './partyService';

@Component({
  selector: 'add-party',
  template:
    `<div>
      <form #party>
        <input type='text' name='name'>
        <input type='number' name='size'>
        <button (click)="addParty(party)">Add Party</button>
      </form>
    </div>`,
  providers: [PartyService]
})
export class AddParty {
  constructor(
    @Inject('AppStore') private appStore: AppStore,
    private partyActions: PartyActions
  ){ }

  private addParty(form) {
    this.appStore.dispatch(
      this.partyActions.addParty(form.name.value, form.size.value)
    );
  }
}
