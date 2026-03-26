import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FileService } from '../../service/file';
import { FormsModule } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-uploads',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './uploads.html',
  styleUrl: './uploads.css',
})
export class Uploads {

  selectedFiles: File[] = [];
  uploadedFiles: any[] = [];
  tags: string = '';
  uploadProgress: number = 0;
  isDragging = false;


  constructor(private fileService: FileService) { }

  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  delete(id: number) {
    this.fileService.deleteFile(id).subscribe(() => {
      this.uploadedFiles = this.uploadedFiles.filter(f => f.id !== id);
    });
  }

  upload() {
    this.selectedFiles.forEach(file => {
      this.fileService.uploadFile(file, this.tags).subscribe(event => {

        if (event.type === HttpEventType.UploadProgress && event.total) {
          this.uploadProgress = Math.round((event.loaded / event.total) * 100);
        }

        if (event.type === HttpEventType.Response) {
          this.uploadedFiles.push(event.body);
          this.uploadProgress = 0;
        }
      });
    });
  }

  loadFiles() {
    this.fileService.getFiles().subscribe({
      next: (res) => {
        this.uploadedFiles = res;
      },
      error: (err) => console.error(err)
    });
  }

onDragOver(event: DragEvent) {
  event.preventDefault();
  this.isDragging = true;
}

onDragLeave(event: DragEvent) {
  event.preventDefault();
  this.isDragging = false;
}

onDrop(event: DragEvent) {
  event.preventDefault();
  this.isDragging = false;

  if (event.dataTransfer?.files) {
    this.selectedFiles = Array.from(event.dataTransfer.files);
  }
}

  ngOnInit() {
    this.loadFiles();
  }

  
  
}
