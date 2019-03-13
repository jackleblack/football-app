import { Component, OnInit } from '@angular/core';
import * as objectPath from 'object-path';
import { LayoutConfigService } from '../../../core/services/layout-config.service';

@Component({
  selector: 'competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  constructor(
		private layoutConfigService: LayoutConfigService,
	) {
	}

  ngOnInit(): void {
		// change page config, refer to config/layout.ts
		const newLayoutOption = objectPath.set(this.layoutConfigService.layoutConfig, 'config.aside.left.display', false);
		this.layoutConfigService.setModel(newLayoutOption, true);
	}

}
