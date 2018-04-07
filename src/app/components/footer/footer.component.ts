import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: FooterService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
