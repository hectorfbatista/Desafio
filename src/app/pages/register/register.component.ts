import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Records } from 'src/app/shared/interfaces/records-interface';
import { RecordsService } from 'src/app/shared/services/records.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  loading = false;
  data: Records | undefined;

  constructor(
    private fb: FormBuilder,
    private recordsService: RecordsService,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void{
    this.form = this.fb.group({ 
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
    })
  
  }

  getMessageFormError(formCtrl: string): string {
    let msg = '';
    if (this.form.hasError('required', [formCtrl])) {
      msg = 'Campo Obrigatório';
    } else if(this.form.hasError('minlength', [formCtrl])) {
      msg = 'Campo deve conter 11 caracteres';
    }
    return msg;
  }

  onRegister() {
    this.loading = true;
    this.data = this.form.value;
    if(this.data) {
      this.recordsService.postData(this.data);
      
      // Adicionado apenas para simular a requisição no back
      setTimeout(() => {
        this.loading = false;  
        this.data = undefined;
        this.form.reset();
        alert("Cadastro realizado com sucesso!")
      }, 800);
    }
  }
}
