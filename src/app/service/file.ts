import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService  {

  private api = "http://localhost:8080/api/files";

  constructor(private http: HttpClient) { }

  uploadFile(file: File, tags: string): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tags", tags);

    return this.http.post(`${this.api}/upload`, formData, {
      reportProgress: true,
      observe: 'events'
  });
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.api}`);
  }

  deleteFile(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
