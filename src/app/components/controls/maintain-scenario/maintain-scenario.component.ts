import { Component, OnInit } from '@angular/core';
import { MaintainScenarioService } from './maintain-scenario.service';

@Component({
  selector: 'app-maintain-scenario',
  templateUrl: './maintain-scenario.component.html',
  styleUrls: ['./maintain-scenario.component.css']
})
export class MaintainScenarioComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: MaintainScenarioService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
