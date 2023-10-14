import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.scss']
})
export class CardPersonComponent {
  @Input('card-name') cardName: string | undefined;
  @Input('card-cpf') cardCpf: string | undefined;
  @Input('card-img') cardImg: string | undefined;
  @Input('card-phone') cardPhone: string | undefined;
  @Input('card-email') cardEmail: string | undefined;
  @Output() onDelete = new EventEmitter();

  delete() {
    this.onDelete.emit();
  }
}
