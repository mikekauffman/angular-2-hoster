import * as PartyActions from './partyActions';

const initialState = {
  parties: [],
}

export function rootReducer(state = initialState, action){
  console.log(action, state)
  switch (action.type) {
    case PartyActions.PARTIES_LOADED:
      return {
        parties: action.parties
      }
    case PartyActions.PARTY_ADDED:
      return {
        parties: state.parties.concat({
          name: action.name,
          size: action.size
        })
      };
    default:
      return state;
  }
};
