import {Inject} from 'angular2/core';
import {PartyService} from './partyService';

export const PARTY_SEATED = 'PARTY_SEATED';
export const PARTY_ADDED = 'PARTY_ADDED';
export const PARTIES_LOADED = 'PARTIES_LOADED';

export class PartyActions {
  constructor(
    @Inject(PartyService) private partyService: PartyService
  ) {}

  addParty(name, size){
    return (dispatch) => {
      // dispatch begin add party
      this.partyService.addParty(name, size).subscribe(
        party => dispatch(this.partyAdded(party)),
        error => console.error('Error: ' + error),
        () => console.log('PARTY ADDED SUCCESS')
      );
    };
  };

  partyAdded(party) {
    return {
      type: PARTY_ADDED,
      name: party.name,
      size: party.size
    };
  };

  getParties() {
    return (dispatch) => {
      // dispatch begin parties loaded
      this.partyService.getParties().subscribe(
        parties => dispatch(this.partiesLoaded(parties)),
        error => console.error('Error: ' + error),
        () => console.log('PARTIES LOADED SUCCESS')
      );
    };
  };

  partiesLoaded(parties) {
    return {
      type: PARTIES_LOADED,
      parties: parties
    };
  }

  seatParty (party) {
    return dispatch => {
      // dispatch begin seat party
      this.partyService.seatParty(party.id).subscribe(
        party => dispatch(this.partySeated(party.id)),
        error => console.error('Error: ' + error),
        () => console.log('PARTY SEATED SUCCESS')
      );
    };
  };

  partySeated (id) {
    return {
      type: PARTY_SEATED,
      id: id
    };
  };
}
