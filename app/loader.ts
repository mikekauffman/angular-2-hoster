import {Component} from 'angular2/core';
import Spinner from 'spin';

@Component({
    selector: 'loader',
    template: `
      <div id='spinner' *ngIf="!loaded"></div>
      <ng-content *ngIf="loaded"></ng-content>
    `,
    inputs: ['loaded', 'options']
})
export class Loader implements AfterViewChecked {
  private ngAfterViewChecked () {
    var target = document.getElementById('spinner')
    if (target && !target.hasChildNodes()) {
      new Spinner(this.options).spin(target);
    };
  };
}
