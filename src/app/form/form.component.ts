import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm = () => {
    this.myForm = this.fb.group({
      firstInput: ['', [Validators.required]],
      secondInput: ['', [Validators.required]],
    })
  }

  errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  isValidForm = () => {
    return !this.myForm.invalid;
  }
  
  submitForm = () => {
    console.log(this.myForm.value)
  }
}
