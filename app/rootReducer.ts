import * as PartyActions from './partyActions';

const initialState = {
  parties: [],
  currentFilter: 'SHOW_ALL'
}

export function rootReducer(state = initialState, action){
  switch (action.type) {
    case PartyActions.ADD_PARTY:
      return {
        parties: state.parties.concat({
          id: action.id,
          text: action.text,
          completed: action.completed
        })
      };
    default:
      return state;
  }
};
