export const ADD_PARTY = 'ADD_PARTY';

export class PartyActions {
  constructor() {
    this.nextPartyId = 0;
  }

  addParty(text){
    return {
      type: ADD_PARTY,
      id: this.nextPartyId++,
      text: text,
      completed: false
    };
  };
}
