import { Component, OnInit } from '@angular/core';

import { CompetitionTeams } from '../../../../core/models/competition-teams';
import { CompetitionService } from '../../../../core/services/competition.service';

@Component({
  selector: 'competition-teams',
  templateUrl: './competition-teams.component.html',
  styleUrls: ['./competition-teams.component.scss']
})
export class CompetitionTeamsComponent implements OnInit {

  competitionTeams: CompetitionTeams;


  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
    this.getCompetitionTeams();
    console.log(this.competitionTeams);
  }

  getCompetitionTeams(): void {
    this.competitionService.getCompetitionTeams()
        .subscribe(competitionTeams => this.competitionTeams = competitionTeams);
  }

}
