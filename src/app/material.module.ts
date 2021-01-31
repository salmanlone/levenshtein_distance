import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      MatMenuModule,
   ],
   exports: [
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      MatTooltipModule,
      MatMenuModule,
   ],
   providers: []
})

export class AngularMaterialModule { }