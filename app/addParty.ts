import {Component, Inject} from 'angular2/core';
import {PartyActions} from './partyActions';
import {PartyService} from './partyService';

@Component({
  selector: 'add-party',
  template:
    `<form #party class="form-inline">
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" type='text' name='name'>
      </div>
      <div class="form-group">
        <label>Size</label>
        <input class="form-control" type='number' name='size'>
      </div>
      <button class="btn btn-primary" (click)="addParty(party)">Add Party</button>
    </form>`,
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
