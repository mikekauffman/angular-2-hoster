import {Component} from 'angular2/core';
import {AddParty} from './addParty';
import {PartyList} from './partyList';

@Component({
    selector: 'hoster-app',
    template:
      `<div>
        <add-party></add-party>
        <party-list></party-list>
      </div>`,
    directives: [AddParty, PartyList]

})
export class App { }
