import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserSService {

  private url: string = 'https://randomuser.me/api/?inc=cell,email,name,picture&results=20'

  constructor(private http: HttpClient) { }

  get ListAllUsers(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resUs: any) => {

          this.http.get<any>(resUs.url).pipe(
            map(
              res => res.JSON()
            )
          )
        })
      })
    )
  }

}

