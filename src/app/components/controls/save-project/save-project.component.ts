import { Component, OnInit } from '@angular/core';
import { SaveProjectService } from './save-project.service';

/**
 *
 */
@Component({
  selector: 'app-save-project',
  templateUrl: './save-project.component.html',
  styleUrls: ['./save-project.component.css']
})
export class SaveProjectComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: SaveProjectService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
