import { Injectable } from '@angular/core';
import {MatchDay} from "soccer-table/dist/interfaces";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly matchesUrl = '/assets/partidos-split3.json'
  private matchDays: MatchDay[] = []
  constructor(private http: HttpClient) { }

  async getMatchdays(): Promise<MatchDay[]>{
    const observable = this.http.get(this.matchesUrl).pipe(
      map((response: any) => response as MatchDay[])
    )

    return lastValueFrom(observable)
  }

  async getNextMatchday(): Promise<MatchDay>{
    const observable = this.http.get("/assets/proxima-jornada.json").pipe(
      map((matchday: any) => {
        return {
          ...matchday,
          matches: matchday.matches.map((match: any) => {
            return {
              ...match,
              score1: 0,
              score2: 0
            }
          })
        }
      })
    )

    return lastValueFrom(observable)
  }
}
