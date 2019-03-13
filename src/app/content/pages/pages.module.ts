import { LayoutModule } from '../layout/layout.module';
import { NgModule } from '@angular/core';
import { MatTabsModule  } from '@angular/material';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PartialsModule } from '../partials/partials.module';
import { ActionComponent } from './header/action/action.component';
import { ProfileComponent } from './header/profile/profile.component';
import { CoreModule } from '../../core/core.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { InnerComponent } from './components/inner/inner.component';
import { CompetitionComponent } from './competition/competition.component';
import { CompetitionTeamsComponent } from './competition/competition-teams/competition-teams.component';
import { CompetitionMatchesComponent } from './competition/competition-matches/competition-matches.component';
import { CompetitionStandingsComponent } from './competition/competition-standings/competition-standings.component';

@NgModule({
	declarations: [
		PagesComponent,
		ActionComponent,
		ProfileComponent,
		ErrorPageComponent,
		InnerComponent,
		CompetitionComponent,
		CompetitionTeamsComponent,
		CompetitionMatchesComponent,
		CompetitionStandingsComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		PagesRoutingModule,
		CoreModule,
		LayoutModule,
		PartialsModule,
		AngularEditorModule,
		MatTabsModule
	],
	providers: []
})
export class PagesModule {
}
