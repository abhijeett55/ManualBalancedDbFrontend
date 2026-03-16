import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileService } from '../../service/file';

@Component({
  selector: 'app-uploads',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './uploads.html',
  styleUrl: './uploads.css',
})
export class Uploads {

  selectedFiles: File[] =  [];

  constructor(private fileService: FileService) { }

  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  upload() {
    
    this.selectedFiles.forEach(file => {

      this.fileService.uploadFile(file)
        .subscribe(res => {
          console.log("Upload success", res);
        });

    });
  }
}
