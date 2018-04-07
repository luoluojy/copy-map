import { Component, OnInit } from '@angular/core';
import { DataResourceService } from './data-resource.service';

@Component({
  selector: 'app-data-resource',
  templateUrl: './data-resource.component.html',
  styleUrls: ['./data-resource.component.css']
})
export class DataResourceComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: DataResourceService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
