import { Component, OnInit } from '@angular/core';
import { NewScenarioService } from './new-scenario.service';

@Component({
  selector: 'app-new-scenario',
  templateUrl: './new-scenario.component.html',
  styleUrls: ['./new-scenario.component.css']
})
export class NewScenarioComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: NewScenarioService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
