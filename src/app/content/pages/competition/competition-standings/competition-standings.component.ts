import { Component, OnInit } from '@angular/core';

import { CompetitionStandings } from '../../../../core/models/competition-standings';
import { CompetitionService } from '../../../../core/services/competition.service';

@Component({
  selector: 'competition-standings',
  templateUrl: './competition-standings.component.html',
  styleUrls: ['./competition-standings.component.scss']
})
export class CompetitionStandingsComponent implements OnInit {

  competitionStandings: CompetitionStandings;


  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
    this.getCompetitionStandings();
    console.log(this.competitionStandings);
  }

  getCompetitionStandings(): void {
    this.competitionService.getCompetitionStandings()
        .subscribe(competitionStandings => this.competitionStandings = competitionStandings);
  }

}
