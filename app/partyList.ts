import {Component, Inject} from 'angular2/core';
import {Party} from './party';
import {PartyActions} from './partyActions';
import {PartyService} from './partyService';
import 'rxjs/Rx';
import moment from 'moment';

@Component({
  selector: 'party-list',
  template: `
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Arrived</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="#party of parties" [id]="party.id">
          <td>{{party.name}}</td>
          <td>{{party.size}}</td>
          <td>{{waitTime(party.arrived_at)}}</td>
          <td>
            <button class="btn btn-default" (click)="seatParty(party)">
              Seated
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  `
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

  private seatParty(party) {
    this.appStore.dispatch(
      this.partyActions.seatParty(party)
    );
  }

  private waitTime(arrival) {
    return moment(arrival).fromNow();
  }

  private ngOnDestroy(){
    this.unsubscribe();
  }
}
