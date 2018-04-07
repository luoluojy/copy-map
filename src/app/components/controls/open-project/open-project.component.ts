import { Component, OnInit } from '@angular/core';
import { OpenProjectService } from './open-project.service';

@Component({
  selector: 'app-open-project',
  templateUrl: './open-project.component.html',
  styleUrls: ['./open-project.component.css']
})
export class OpenProjectComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: OpenProjectService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
