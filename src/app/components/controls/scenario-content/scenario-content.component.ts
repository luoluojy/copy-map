import { Component, OnInit } from '@angular/core';
import { ScenarioContentService } from './scenario-content.service';

@Component({
  selector: 'app-scenario-content',
  templateUrl: './scenario-content.component.html',
  styleUrls: ['./scenario-content.component.css']
})
export class ScenarioContentComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: ScenarioContentService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
