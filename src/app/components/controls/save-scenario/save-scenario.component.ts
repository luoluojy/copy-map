import { Component, OnInit } from '@angular/core';
import { SaveScenarioService } from './save-scenario.service';

/**
 *
 */
@Component({
  selector: 'app-save-scenario',
  templateUrl: './save-scenario.component.html',
  styleUrls: ['./save-scenario.component.css']
})
export class SaveScenarioComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: SaveScenarioService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
