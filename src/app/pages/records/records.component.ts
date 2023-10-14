import { Component, OnInit } from '@angular/core';
import { remove } from 'lodash';
import { Records } from 'src/app/shared/interfaces/records-interface';
import { RecordsService } from 'src/app/shared/services/records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})

export class RecordsComponent implements OnInit{
  records:  Array<Records> = [];

  constructor(private recordsService: RecordsService) { }

  ngOnInit(): void {
    this.recordsService.getData().subscribe((data:  Array<Records>) => {
      this.records = data;
    })
  }

  delete(element: Records) {
    this.recordsService.deleteData(element);
    remove(this.records,  (x: Records) => x === element);
  }
  
}
