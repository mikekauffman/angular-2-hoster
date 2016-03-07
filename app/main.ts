import {bootstrap} from 'angular2/platform/browser'
import {provide} from 'angular2/core';

import {App} from './app';
import {createStore} from 'redux';
import {rootReducer} from './rootReducer';
import {PartyActions} from './partyActions';

const appStore = createStore(rootReducer);

bootstrap(App, [
  provide('AppStore', { useValue: appStore }),
  PartyActions
])
  .catch(err => console.error(err));
