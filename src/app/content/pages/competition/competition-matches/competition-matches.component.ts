import { Component, OnInit } from '@angular/core';

import { CompetitionMatches } from '../../../../core/models/competition-matches';
import { CompetitionService } from '../../../../core/services/competition.service';

@Component({
  selector: 'competition-matches',
  templateUrl: './competition-matches.component.html',
  styleUrls: ['./competition-matches.component.scss']
})
export class CompetitionMatchesComponent implements OnInit {

  competitionMatches: CompetitionMatches;


  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
    this.getCompetitionMatches();
    // console.log(this.competitionMatches);
  }

  getCompetitionMatches(): void {
    this.competitionService.getCompetitionMatches()
        .subscribe(competitionMatches => this.competitionMatches = competitionMatches);
  }

}
