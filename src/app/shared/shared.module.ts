import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,RouterLink,RouterModule,FormsModule 
  ],
    
  exports: [HeaderComponent,SpinnerComponent,SelectComponent]
})
export class SharedModule { }
