import { AlgoApiService } from './../core/algo-api.service';
import { Component, OnInit } from '@angular/core';
import { isUndefined } from 'util';

 export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private algoApiService: AlgoApiService) { }

  firstInput: string ="";
  firstInputArray: any;
  firstLength: any = 0;

  secondInput: string ="";
  secondInputArray: any;
  secondLength: any = 0;

  matrix: any;

  
  ngOnInit(): void {
    this.getApiData();
  }

  getApiData(){
    return this.algoApiService.apiData.subscribe(data => {

      console.log(data);
      localStorage.setItem("Distance", data.Distance);

      this.matrix = data.Matrix;
    });
  }

}
