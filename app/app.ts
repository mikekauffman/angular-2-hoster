import {Component} from 'angular2/core';
import {AddParty} from './addParty';
import {PartyList} from './partyList';

@Component({
    selector: 'hoster-app',
    template:
      `<div class="col-xs-12 col-md-6 col-md-offset-3 container">
        <div class="row text-center">
          <h1>Hoster</h1>
          <add-party></add-party>
        </div>
        <div class="row">
          <party-list></party-list>
        </div>
      </div>`,
    directives: [AddParty, PartyList]

})
export class App { }
