import { Component, OnInit } from '@angular/core';
import { AnalysisTaskService } from './analysis-task.service';

@Component({
  selector: 'app-analysis-task',
  templateUrl: './analysis-task.component.html',
  styleUrls: ['./analysis-task.component.css']
})
export class AnalysisTaskComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: AnalysisTaskService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
