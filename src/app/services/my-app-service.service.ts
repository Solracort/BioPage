import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MyAppServiceService {

  constructor() { }
  
  public isValidField(form: FormGroup, field: string):boolean{
    return !!(form.controls[field].errors 
      && form.controls[field].touched);
  }
}
