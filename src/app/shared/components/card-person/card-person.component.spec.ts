import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonComponent } from './card-person.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardPersonComponent', () => {
  let component: CardPersonComponent;
  let fixture: ComponentFixture<CardPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPersonComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    });
    fixture = TestBed.createComponent(CardPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete', () => {
    spyOn(component.onDelete, 'emit');

    component.delete();

    expect(component.onDelete.emit).toHaveBeenCalled();
  });
});
