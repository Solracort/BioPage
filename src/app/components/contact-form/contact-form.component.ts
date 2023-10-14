import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MyAppServiceService } from 'src/app/services/my-app-service.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  public miFormulario: FormGroup;
  private url : string = "https://formsubmit.co/solracort@gmail.com";
  private myService = inject(MyAppServiceService);

  constructor(private formBuilder: FormBuilder,private http: HttpClient) {
    this.miFormulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email:  ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.maxLength(256)]]
    });
  }

  submitForm() {
      // if (this.miFormulario.valid) {
        const formData = this.miFormulario.value;
  
        this.http.post(this.url, formData)
          .subscribe({
              next: (v) => console.log(v),
              error: (e) => console.error(e),
              complete: () => console.info('complete')
          })
      // }
  }
  public isValidField(form: FormGroup, field: string):boolean{
    return this.myService.isValidField(form, field);
  }
}
