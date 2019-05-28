import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import { TEST_DATA } from "./mock-data";
import { Observable } from "rxjs";
import { DataViewService } from "./data-view.service";
import { MatTableDataSource, MatSort } from "@angular/material";
import { AppCommandService } from '../../app-command.service';
import { AppCommand } from '../../app-command.enum';

@Component({
  selector: "app-data-view.",
  templateUrl: "./data-view.component.html",
  styleUrls: ["./data-view.component.css"],
  animations: []
})
export class DataViewComponent implements OnInit, AfterViewInit {
  /**
   * 构造函数
   * @param service
   */
  constructor(private service: DataViewService,private appCommands:AppCommandService) {
    this.service.owner = this;
  }

  displayedColumns = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource(TEST_DATA);

  minHeight = 180;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  @ViewChild("container") containerRef: ElementRef;
  @ViewChild("resizeTop") resizeTopRef: ElementRef;

  @ViewChild("max") maxRef: any;
  @ViewChild("min") minRef: any;

  @ViewChild("matTabGroup") matTabGroup: any;

  ngOnInit() {
    this.appCommands.execute(AppCommand.ResizeDataViewCommand);
  }

  onCloseTabpageClick(index) {
    this.appCommands.execute(AppCommand.CloseTabpageCommand,index);
  }

  onCloseDataViewClick() {
    this.appCommands.execute(AppCommand.CloseDataViewCommand);
  }

  onMaxDataViewClick() {
    this.appCommands.execute(AppCommand.MaxDataViewCommand)
  }

  onMinDataViewClick() {
    this.appCommands.execute(AppCommand.MinDataViewCommand)
    
  }
}
