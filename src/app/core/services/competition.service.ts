import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Competition } from './models/competition';
import { COMPETITION } from './models/mock-competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor() { }

  getCompetition(): Observable<Competition> {
    return of(HEROES);
  }
}
