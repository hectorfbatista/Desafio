import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('card-img') cardImg: string | undefined;
  @Input('card-title') cardTitle: string | undefined;
  @Input('card-text') cardText: string | undefined;
  @Input('card-link') cardLink: string | undefined;
}
