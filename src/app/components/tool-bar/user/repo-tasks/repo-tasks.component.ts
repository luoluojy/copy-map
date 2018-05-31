import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material';
import { AppCommand } from '../../../../app-command.enum';
import { AppCommandService } from '../../../../app-command.service';
import { CloudStorageService } from "../../../../services/cloud-storage.service";


@Component({
  selector: "app-repo-tasks",
  templateUrl: "./repo-tasks.component.html",
  styleUrls: ["./repo-tasks.component.css"],
  providers: [CloudStorageService]
})
export class RepoTasksComponent implements OnInit {

  constructor(private appCommands:AppCommandService,
    private dialogRef: MatDialogRef<RepoTasksComponent>,) { }

  repoEntities: RepoEntity[] = [];
  
  // 显示目录文件信息
  displayedColumns = ["position", "download", "name", "mtime"];
 
  async ngOnInit() {
    await this.appCommands.execute(AppCommand.listLibraryEntitiesCommand)
    let reposEntities = JSON.parse(localStorage.getItem('repos_entities'));
    this.repoEntities = reposEntities['entities'];
  }

  onCloseRepo(){
    this.dialogRef.close();
  }

  downloadEntity(element, href, event) {
    // if (element.type == 'file') {
    //   let flag = true;
    //   if (href.getAttribute('href')) {
    //     flag = false;
    //   } else {
    //     this.cloudStorageService.downloadFile(localStorage.getItem('cloudStorageToken'), this.repoEntities.repo_id, element.name)
    //       .subscribe((downloadUrl: string) => {
    //         href.setAttribute('href', downloadUrl)
    //         href.click();
    //         flag=false;
    //       })
    //   }
    //   if (flag) {
    //     href.click()
    //   }
    // } else {  //下载目录类型
    //   this.cloudStorageService.downloadDir(localStorage.getItem('cloudStorageToken'), this.repoEntities.repo_id, element.name)
    //     .subscribe((progress) => {
    //       progress.subscribe((info) => {
    //         href.setAttribute('href', `https://58.213.133.181:7774/seafhttp/zip/${info['zipToken']}`);
    //         if (this.flag) {
    //           href.click();
    //           this.flag = false;
    //         }
    //         event.stopPropagation();
    //       });
    //     })
    // }
  }
  flag = true;
}

// 仓库实体信息
export class RepoEntity {
  id: string;
  position: number
  name: string;
  mtime: number;
  type: string;
  constructor(id, position, name, mtime, type) {
    this.id = id;
    this.position = position;
    this.name = name;
    this.mtime = mtime;
    this.type = type;
  }
}