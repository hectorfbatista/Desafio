import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RecordsComponent } from './records.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RecordsService } from 'src/app/shared/services/records.service';

describe('RecordsComponent', () => {
  let component: RecordsComponent;
  let fixture: ComponentFixture<RecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordsComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        RecordsService
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    });
    fixture = TestBed.createComponent(RecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete', () => {
    const service = TestBed.inject(RecordsService);
    const obj = {
      name: 'Joao',
      cpf: '12312312312',
      phone: '12312312312',
      email: 'joao@joao.com',
    }
    component.records = [obj];

    spyOn(service, "deleteData");

    component.delete(obj);

    expect(service.deleteData).toHaveBeenCalled();
    expect(component.records).toEqual([]);
  });
});
