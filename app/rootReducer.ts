import * as PartyActions from './partyActions';

const initialState = {
  parties: [],
  loaded: false
}

export function rootReducer(state = initialState, action){
  console.log(action, state)
  switch (action.type) {
    case PartyActions.BEGIN_LOADING:
      return Object.assign({}, state, {
        loaded: false
      });
    case PartyActions.PARTIES_LOADED:
      return Object.assign({}, state, {
        parties: action.parties.filter((party) => {
          return !party.seated
        }),
        loaded: true
      });
    case PartyActions.PARTY_ADDED:
      return Object.assign({}, state, {
        parties: state.parties.concat({
          name: action.name,
          size: action.size
        }),
        loaded: true
      });
    case PartyActions.PARTY_SEATED:
      return Object.assign({}, state, {
        parties: state.parties.filter((party) => {
          return party.id != action.id
        }),
        loaded: true
      });
    default:
      return state;
  }
};
