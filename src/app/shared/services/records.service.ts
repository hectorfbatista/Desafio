import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Records } from '../interfaces/records-interface';
import { map } from 'rxjs';
import { remove } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  records: Array<Records> = [];

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient
      .get<Array<Records>>('https://private-9d65b3-tinnova.apiary-mock.com/users')
      .pipe(
        map((records: Array<Records>) => {
        records = records.concat(JSON.parse(localStorage.getItem('records') || ''))
        return records;
      }));
  }

  deleteData(data: Records) {
    remove(this.records, (x: Records) => x === data);
    this.setRecords();
  }

  postData(data: Records) {
    this.saveRecords(data);
  }

  private saveRecords(data: Records) {
    if(!localStorage.getItem('records')) {
      this.records.push(data);
      this.setRecords();
    } else {
      this.records = JSON.parse(localStorage.getItem('records') || '');
      this.records.push(data);
      this.setRecords();
    }
  }

  private setRecords() {
    localStorage.setItem('records', JSON.stringify(this.records));
  }
}