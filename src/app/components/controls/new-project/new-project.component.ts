import { Component, OnInit } from '@angular/core';
import { NewProjectService } from './new-project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: NewProjectService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
