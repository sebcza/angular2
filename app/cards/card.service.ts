import {Injectable} from "angular2/core";
import {Headers, Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {ICard} from "./card";

@Injectable()
export class CardService {
    private _url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/';
    private _headers = new Headers();

    constructor(private _http: Http) {
        this._headers.append('X-Mashape-Key', 'ixQZhwZE5HmshicU6MNZBMgjhtVgp1PCuzjjsncg1AXyWDQZeE');
    }

    getByName(name: string): Observable<ICard[]> {
        console.log('name ', name);
        return this.getCards(`search/${name}`);
    }

    getByClass(className: string): Observable<ICard[]> {
        return this.getCards(`classes/${className}`);
    }
    getByFaction(factionName: string): Observable<ICard[]> {
        return this.getCards(`factions/${factionName}`);
    }

    private getCards(urlParams: string): Observable<ICard[]> {
        return this._http.get(`${this._url}${urlParams}`, {
                headers: this._headers
            })
            .map((response:Response) => <ICard[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}