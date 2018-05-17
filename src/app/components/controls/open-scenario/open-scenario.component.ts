import { Component, OnInit } from '@angular/core';
import { OpenScenarioService } from './open-scenario.service';

@Component({
  selector: 'app-open-scenario',
  templateUrl: './open-scenario.component.html',
  styleUrls: ['./open-scenario.component.css']
})
export class OpenScenarioComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: OpenScenarioService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
