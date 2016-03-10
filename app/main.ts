import {bootstrap} from 'angular2/platform/browser'
import {provide} from 'angular2/core';
import {App} from './app';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './rootReducer';
import {PartyActions} from './partyActions';
import {PartyService} from './partyService';
import {HTTP_PROVIDERS} from 'angular2/http';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const appStore = createStoreWithMiddleware(rootReducer);

bootstrap(App, [
  provide('AppStore', { useValue: appStore }),
  HTTP_PROVIDERS,
  PartyActions,
  PartyService
])
  .catch(err => console.error(err));
