import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
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

  addParty (name, size) {
    let body = JSON.stringify({ name: name, size: size });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + 'api/v1/parties', body, options)
                    .map(res => <Party[]>res.json())
                    .do(data => console.log(data))
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
