import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FileMetaData } from '../_environment/filemetaData';
import { Partition } from '../_environment/partition';

@Injectable({
  providedIn: 'root',
})
export class FileService {

  private filesApi = 'http://localhost:8080/api/files';
  private partitionsApi = 'http://localhost:8080/api/partitions';

  constructor(private http: HttpClient) {}

  uploadFile(
    file: File,
    tags: string,
    userId: string
  ): Observable<HttpEvent<FileMetaData>> {

    const formData = new FormData();
    formData.append('file', file);
    formData.append('tags', tags || '');
    formData.append('userId', userId);

    return this.http.post<FileMetaData>(
      `${this.filesApi}/upload`,
      formData,
      {
        observe: 'events',
        reportProgress: true
      }
    );
  }

  uploadPartition(
    file: File,
    tags: string,
    userId: string,
    partition: string
  ): Observable<HttpEvent<FileMetaData>> {

    const formData = new FormData();
    formData.append('file', file);
    formData.append('tags', tags || '');
    formData.append('userId', userId);
    formData.append('partition', partition);

    return this.http.post<FileMetaData>(
      `${this.filesApi}/upload-partition`,
      formData,
      {
        observe: 'events',
        reportProgress: true
      }
    );
  }

  getFilesByUser(userId: string): Observable<FileMetaData[]> {
    return this.http.get<FileMetaData[]>(
      `${this.filesApi}/user/${userId}`
    );
  }

  getFilesByPartition(
    userId: string,
    partition: string
  ): Observable<FileMetaData[]> {
    return this.http.get<FileMetaData[]>(
      `${this.filesApi}/user/${userId}/partition/${partition}`
    );
  }

  deleteFile(id: number, userId: string) {
    return this.http.delete(
      `${this.filesApi}/${id}?userId=${userId}`
    );
  }

  getStorageUsed(userId: string): Observable<number> {
    return this.http.get<number>(
      `${this.filesApi}/storage/${userId}`
    );
  }

  createPartition(partition: Partition) {
    return this.http.post(
      this.partitionsApi,
      partition
    );
  }

  getPartitions(userId: string): Observable<Partition[]> {
    return this.http.get<Partition[]>(
      `${this.partitionsApi}/user/${userId}`
    );
  }

  deletePartition(id: number) {
    return this.http.delete(
      `${this.partitionsApi}/${id}`
    );
  }
}