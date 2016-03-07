import {Component, Inject} from 'angular2/core';
import {Party} from './party';

@Component({
  selector: 'party-list',
  template: `
    <ul>
      <party
        *ngFor="#party of parties"
        [id]="party.id"
      >{{party.text}}</party>
    </ul>
  `,
  directives: [Party],
})
export class PartyList implements OnDestroy {
  constructor(
    @Inject('AppStore') private appStore: AppStore
  ){
    this.unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
      this.parties = state.parties;
    });
  }

  private ngOnDestroy(){
    //remove listener
    this.unsubscribe();
  }
}
