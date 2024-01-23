import { Component } from '@angular/core';
import {LeaderboardService} from "../../services/leaderboard.service";
import {Leaderboard} from "soccer-table/dist/interfaces";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  leaderboard?: Leaderboard
  constructor(private leaderboardService: LeaderboardService){
    leaderboardService.getLeaderboard().subscribe((leaderboard) => {
      this.leaderboard = leaderboard
    })
  }

  getImageUrl(team: string){
    return 'assets/img/' + team + '.png'
  }
}
