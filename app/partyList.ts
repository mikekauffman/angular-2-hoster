import {Component, Inject} from 'angular2/core';
import {Party} from './party';
import {PartyActions} from './partyActions';
import {PartyService} from './partyService';
import 'rxjs/Rx';
import moment from 'moment';
import Spinner from 'spin';

@Component({
  selector: 'party-list',
  template: `
    <div id="spinner" *ngIf="!loaded"></div>
    <table *ngIf="loaded" class="table table-hover">
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
export class PartyList implements OnDestroy, AfterViewChecked {
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
      this.loaded = state.loaded;
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

  private ngAfterViewChecked (){
    var target = document.getElementById('spinner')
    if (target && !target.hasChildNodes()) {
      new Spinner({top: '200%'}).spin(target);
    }
  }

  private ngOnDestroy(){
    this.unsubscribe();
  }
}
