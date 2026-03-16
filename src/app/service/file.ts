import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FileService  {
  private api = "http://localhost:8080/files";

  constructor(private http: HttpClient) {
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    return this.http.post(`${this.api}/upload`, formData);
  }
}
