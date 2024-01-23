import { Component } from '@angular/core';
import {LeaderboardService} from "../../services/leaderboard.service";
import {MatchDay} from "soccer-table/dist/interfaces";

@Component({
  selector: 'app-matchday-editor',
  templateUrl: './matchday-editor.component.html',
  styleUrls: ['./matchday-editor.component.scss']
})
export class MatchdayEditorComponent {
  score1: number = 0
  score2: number = 0

  matchday?: MatchDay
  constructor(
    private leaderboardService: LeaderboardService
  ) {
    leaderboardService.getNextMatchday().subscribe((matchday) => {
      console.log(matchday)
      this.matchday = matchday
    })
  }

  addMatches(){
    if(this.matchday){
      this.leaderboardService.addMatches(this.matchday.matches)
    }
  }

  getImageUrl(team: string){
    return 'assets/img/' + team + '.png'
  }


}
