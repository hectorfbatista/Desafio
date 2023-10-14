import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RecordsService } from 'src/app/shared/services/records.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        RecordsService
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register', fakeAsync(() => {
    const service = TestBed.inject(RecordsService);
    const form = {
      name: 'joao',
      cpf: '12312312312',
      phone: '12341231231',
      email: 'joao@joao.com'
    };

    component.form.patchValue(form);

    spyOn(service, 'postData');

    component.onRegister();

    tick(1000);

    expect(service.postData).toHaveBeenCalledWith(form);
    expect(component.loading).toBeFalse();
    expect(component.data).toBeUndefined();
  }));

  it('should get message error when has min length error', () => {
    component.form.controls?.['cpf'].setValue('124');
    component.form.controls['cpf'].setErrors({ minlength: true });

    const message = component.getMessageFormError('cpf');

    expect(message).toEqual('Campo deve conter 11 caracteres');
  });
});
