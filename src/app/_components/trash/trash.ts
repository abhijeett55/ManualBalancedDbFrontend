import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileMetaData } from '../../_environment/filemetaData';

@Component({
  selector: 'app-trash',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './trash.html',
  styleUrl: './trash.css',
})

export class Trash {
  trashedFiles: FileMetaData[] = [];


  emptyTrash(): void {
    this.trashedFiles = [];
  }
}
