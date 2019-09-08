import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
 exports: [
  MatToolbarModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatExpansionModule,
  MatTooltipModule
 ],
 declarations: []
})
export class MatComponentsModule { }
