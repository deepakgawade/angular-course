import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.prod';
import { APIResponses, Game } from '../model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGamelist(ordering: string,
    search: string,): Observable<APIResponses<Game>> {
    let params = new HttpParams().set("ordering", ordering);

    if (search) {
      params = new HttpParams().set("ordering", ordering).set('search', search);
    }

    return this.http.get<APIResponses<Game>>(env.BASE_URl+'/games', { params: params });


  }
}
