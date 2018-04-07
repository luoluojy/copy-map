import { Component, OnInit } from '@angular/core';
import { ProjectContentService } from './project-content.service';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.css']
})
export class ProjectContentComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: ProjectContentService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
