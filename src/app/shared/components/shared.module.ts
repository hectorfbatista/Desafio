import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { NgxMaskPipe } from 'ngx-mask';

import { CardPersonComponent } from './card-person/card-person.component';
import { CardComponent } from './card/card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    CardPersonComponent
  ],
  imports: [
    RouterModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    NavBarComponent,
    CardComponent,
    CardPersonComponent,
    CommonModule,
  ],
  providers: [
    NgxMaskPipe
  ],
})
export class SharedModule { }