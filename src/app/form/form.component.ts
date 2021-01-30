import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import {AlgoApiService} from "../core/algo-api.service"

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

  constructor(public fb: FormBuilder, private algoApiService: AlgoApiService) { }

  ngOnInit(): void {
    this.reactiveForm()
  }

  getApiData = () =>{
    this.algoApiService.sendGetRequest().subscribe((data: any[]) => {
      this.algoApiService.updateApiData(data);
    })
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
  
  submitForm = () => {
    console.log(this.myForm.value)
  }
}
