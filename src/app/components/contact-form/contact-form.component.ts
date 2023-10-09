import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  public miFormulario: FormGroup;
  private url : string = "https://formsubmit.co/solracort@gmail.com"

  constructor(private formBuilder: FormBuilder,private http: HttpClient) {
    this.miFormulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email:  ['', [Validators.required, Validators.email]],
      mensaje:['', Validators.required]
    });
  }

  submitForm() {
    if (this.miFormulario.valid) {
      if (this.miFormulario.valid) {
        const formData = this.miFormulario.value;
  
        this.http.post(this.url, formData)
          .subscribe(response => {
            // Maneja la respuesta (por ejemplo, muestra un mensaje de éxito)
            console.log(response);
          });
      }
    }
  }
}
