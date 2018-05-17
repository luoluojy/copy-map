import { Component, OnInit } from "@angular/core";

import { CloudStorageService } from "../../../../services/cloud-storage.service";

@Component({
  selector: "app-repo-tasks",
  templateUrl: "./repo-tasks.component.html",
  styleUrls: ["./repo-tasks.component.css"],
  providers: [CloudStorageService]
})
export class RepoTasksComponent implements OnInit {
  constructor(private cloudStorageService:CloudStorageService) {}

  ngOnInit() { }

  displayedColumns = ["checkbox", "id", "name", "mtime"];
  // displayedColumns = ["position", "name", "weight", "symbol"];
  dataSource = RepoEntity_DATA;

  turnDir(row) {
    console.log(row);
    if (row["type"] == "dir") {
      //  点击为目录
      this.dataSource = RepoEntity_DATA2;
    } else {
      this.dataSource = RepoEntity_DATA;
    }
  }
}

export interface RepoEntity {
  id: number;
  name: string;
  mtime: number;
  // downloadUrl: string;
  type: string;
}

const RepoEntity_DATA: RepoEntity[] = [
  { id: 1, name: "Hydrogen", mtime: 1.0079, type: "dir" },
  { id: 2, name: "Helium", mtime: 4.0026, type: "dir" },
  { id: 3, name: "Lithium", mtime: 6.941, type: "dir" },
  { id: 4, name: "Beryllium", mtime: 9.0122, type: "dir" },
  { id: 5, name: "Boron", mtime: 10.811, type: "dir" },
  { id: 6, name: "Carbon", mtime: 12.0107, type: "file" },
  { id: 7, name: "Nitrogen", mtime: 14.0067, type: "file" },
  { id: 8, name: "Oxygen", mtime: 15.9994, type: "file" },
  { id: 9, name: "Fluorine", mtime: 18.9984, type: "file" },
  { id: 10, name: "Neon", mtime: 20.1797, type: "file" }
];
const RepoEntity_DATA2: RepoEntity[] = [
  { id: 9, name: "Fluorine", mtime: 18.9984, type: "file" },
  { id: 10, name: "Neon", mtime: 20.1797, type: "file" },
  { id: 2, name: "Helium", mtime: 4.0026, type: "dir" },
  { id: 7, name: "Nitrogen", mtime: 14.0067, type: "file" },
  { id: 5, name: "Boron", mtime: 10.811, type: "dir" },
  { id: 6, name: "Carbon", mtime: 12.0107, type: "file" },
  { id: 4, name: "Beryllium", mtime: 9.0122, type: "dir" }
];

export interface Data {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export const TEST_DATA: Data[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
  { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na" },
  { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg" },
  { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al" },
  { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si" },
  { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P" },
  { position: 16, name: "Sulfur", weight: 32.065, symbol: "S" },
  { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl" },
  { position: 18, name: "Argon", weight: 39.948, symbol: "Ar" },
  { position: 19, name: "Potassium", weight: 39.0983, symbol: "K" },
  { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca" }
];
