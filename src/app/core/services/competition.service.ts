import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// import { Competition } from './models/competition';
// import { COMPETITION } from './models/mock-competition';
import { CompetitionTeams } from '../models/competition-teams';
import { COMPETITION_TEAMS } from '../models/mock-competition-teams';

import { CompetitionStandings } from '../models/competition-standings';
import { COMPETITION_STANDINGS } from '../models/mock-competition-standings';

import { CompetitionMatches } from '../models/competition-matches';
import { COMPETITION_MATCHES } from '../models/mock-competition-matches';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor() { }

  getCompetitionTeams(): Observable<CompetitionTeams> {
    return of(COMPETITION_TEAMS);
  }

  getCompetitionStandings(): Observable<CompetitionStandings> {
    return of(COMPETITION_STANDINGS);
  }

  getCompetitionMatches(): Observable<CompetitionMatches> {
    return of(COMPETITION_MATCHES);
  }
}
