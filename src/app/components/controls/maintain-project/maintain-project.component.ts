import { Component, OnInit } from '@angular/core';
import { MaintainProjectService } from './maintain-project.service';

@Component({
  selector: 'app-maintain-project',
  templateUrl: './maintain-project.component.html',
  styleUrls: ['./maintain-project.component.css']
})
export class MaintainProjectComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: MaintainProjectService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
