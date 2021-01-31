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

  distance: number;

  matrix: any;

  
  ngOnInit(): void {
    this.getApiData();
  }

  getApiData(){
    return this.algoApiService.apiData.subscribe(data => {

      localStorage.setItem("Distance", data.Distance);
      this.distance = data.Distance;
      this.matrix = data.Matrix;
    });
  }

}
