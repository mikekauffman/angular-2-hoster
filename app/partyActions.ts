import {Inject} from 'angular2/core';
import {PartyService} from './partyService';

export const ADD_PARTY = 'ADD_PARTY';
export const GET_PARTIES = 'GET_PARTIES';
export const PARTIES_LOADED = 'PARTIES_LOADED';

export class PartyActions {
  constructor(
    @Inject(PartyService) private partyService: PartyService
  ) {}

  addParty(name, size){
    return {
      type: ADD_PARTY,
      name: name,
      size: size
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
}
