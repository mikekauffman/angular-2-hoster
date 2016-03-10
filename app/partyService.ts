import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Party} from './party';
import 'rxjs/Rx';

@Injectable()
export class PartyService {
  constructor (private http: Http) {}

  private baseUrl = 'https://express-hoster.herokuapp.com/';

  getParties () {
    return this.http.get(this.baseUrl + 'api/v1/parties')
                    .map(res => <Party[]>res.json())
                    .do(data => console.log(data))
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
