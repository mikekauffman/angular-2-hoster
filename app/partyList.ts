import {Component, Inject} from 'angular2/core';
import {Party} from './party';
import {PartyActions} from './partyActions';
import {PartyService} from './partyService';
import 'rxjs/Rx';

@Component({
  selector: 'party-list',
  template: `
    <ul>
      <party *ngFor="#party of parties" [id]="party.id">
        {{party.name}} - {{party.size}}
      </party>
    </ul>
  `,
  directives: [Party]
})
export class PartyList implements OnDestroy {
  parties: Observable<Party[]>
  constructor(
    @Inject('AppStore') private appStore: AppStore,
    @Inject(PartyService) private partyService: PartyService,
    private partyActions: PartyActions
  ){
    this.appStore.dispatch(
      this.partyActions.getParties()
    );

    this.unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
      this.parties = state.parties;
    });
  }

  private ngOnDestroy(){
    this.unsubscribe();
  }
}
