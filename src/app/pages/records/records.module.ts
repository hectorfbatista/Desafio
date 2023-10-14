import { NgModule } from '@angular/core';

import { RecordsComponent } from './records.component';
import { RecordsRoutingModule } from './records-routing.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RecordsComponent
  ],
  imports: [
    RecordsRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class RecordsModule { }