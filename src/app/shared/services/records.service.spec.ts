import { TestBed } from '@angular/core/testing';

import { RecordsService } from './records.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RecordsService', () => {
  let service: RecordsService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [RecordsService],
    });
    service = TestBed.inject(RecordsService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Data', () => {
    const url = 'https://private-9d65b3-tinnova.apiary-mock.com/users';
    const data = [
      {
        name: 'Joao',
        cpf: '12312312312',
        phone: '12312312312',
        email: 'joao@joao.com',
      }
    ];

    localStorage.setItem('records', JSON.stringify(data));

    service.getData().subscribe((response) => {
      expect(response).toEqual([...data, ...data]);
    })
    
    const req = http.expectOne({ method: 'GET'});
    req.flush(data);
    expect(req.request.url).toEqual(url);
  });

  it('should delete', () => {
    const obj = {
      name: 'Joao',
      cpf: '12312312312',
      phone: '12312312312',
      email: 'joao@joao.com',
    }
    service.records = [obj];

    spyOn(service as any, "setRecords");

    service.deleteData(obj);

    expect(service["setRecords"]).toHaveBeenCalled();
    expect(service.records).toEqual([]);
  });

  it('should post data', () => {
    const obj = {
      name: 'Joao',
      cpf: '12312312312',
      phone: '12312312312',
      email: 'joao@joao.com',
    }

    spyOn(service as any, "saveRecords");

    service.postData(obj);

    expect(service["saveRecords"]).toHaveBeenCalled();
  });

  it('should set records', () => {
    localStorage.clear();

    const obj = {
      name: 'Joao',
      cpf: '12312312312',
      phone: '12312312312',
      email: 'joao@joao.com',
    }
    service.records = [obj];

    service["setRecords"]();

    const records = JSON.parse(localStorage.getItem('records') || '');

    expect(records).toEqual([obj]);
  });

  it('should save records when already has records', () => {
    const data = [
      {
        name: 'Joao',
        cpf: '12312312312',
        phone: '12312312312',
        email: 'joao@joao.com',
      }
    ];

    const obj = {
      name: 'mario',
      cpf: '12312312312',
      phone: '12312312312',
      email: 'mario@mario.com',
    };

    localStorage.setItem('records', JSON.stringify(data));

    spyOn(service as any, "setRecords");

    service["saveRecords"](obj);

    expect(service.records).toEqual([...data, obj]);
    expect(service["setRecords"]).toHaveBeenCalled();
  });

  it('should save Records when does not has records', () => {
    localStorage.clear();

    const obj = {
      name: 'mario',
      cpf: '12312312312',
      phone: '12312312312',
      email: 'mario@mario.com',
    };

    spyOn(service as any, "setRecords");

    service["saveRecords"](obj);

    expect(service.records).toEqual([obj]);
    expect(service["setRecords"]).toHaveBeenCalled();
  });

});
