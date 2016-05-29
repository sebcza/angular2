import {Injectable} from "angular2/core";
import {ICardInfo} from "./card-info";
import {Http, Response, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class CardInfoService {
    private _url =  'https://omgvamp-hearthstone-v1.p.mashape.com/info';
    private _info: ICardInfo;
    private _headers = new Headers();

    // headers.append('X-Mashape-Key', ixQZhwZE5HmshicU6MNZBMgjhtVgp1PCuzjjsncg1AXyWDQZeE);

    constructor(private _http: Http) {
        this._headers.append('X-Mashape-Key', 'ixQZhwZE5HmshicU6MNZBMgjhtVgp1PCuzjjsncg1AXyWDQZeE');
    }

    getInfo(): Observable<ICardInfo> {
        return this._http.get(this._url, {
                headers: this._headers
            })
            .map((response: Response) => <ICardInfo>response.json())
            .do(data => this._info = data)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}