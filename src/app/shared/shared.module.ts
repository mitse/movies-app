import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateInputDirective } from './directives/validate-input.directive';
import { PopupRoutingContainerComponent } from './popup-routing-container/popup-routing-container.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    ValidateInputDirective,
    PopupRoutingContainerComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RatingModule
  ],
  exports: [
    ValidateInputDirective,
    PopupRoutingContainerComponent,
    LoaderComponent,
    RatingModule
  ]
})
export class SharedModule { }
