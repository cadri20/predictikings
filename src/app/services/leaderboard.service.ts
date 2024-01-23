import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {Leaderboard, Match, MatchDay} from "soccer-table/dist/interfaces";
import {Season} from "soccer-table";
import {from, map, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private season: Season = new Season("Split 3", [], true, true);
  private updateLeaderboardSubject: Subject<void> = new Subject<void>();
  nextMatchday = 1
  constructor(private dataService: DataService) {
    this.dataService.getMatchdays().then((matchdays) => {
      console.log("matchdays ", matchdays)
      this.season = new Season("Split 3", matchdays, true, true)
      this.nextMatchday = matchdays.length + 1
      this.updateLeaderboardSubject.next()
    })
  }

  getLeaderboard(): Observable<Leaderboard>{
    return this.updateLeaderboardSubject.asObservable().pipe(
      map(() => this.season.getLeaderboard())
    )
  }

  getNextMatchday(): Observable<MatchDay>{
    return from(this.dataService.getNextMatchday())
  }

  addMatch(match: Match){
    this.season.addMatch(2, match)
    this.updateLeaderboardSubject.next()
  }

  addMatches(matches: Match[]){
    console.log("Matches ", matches)
    this.season.removeMatchday(this.nextMatchday)
    matches.forEach((match) => {
      this.season.addMatch(this.nextMatchday, match)
    })
    this.updateLeaderboardSubject.next()
  }


}
