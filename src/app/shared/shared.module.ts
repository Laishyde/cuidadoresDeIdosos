import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SlideComponent } from './componentes/slide/slide.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { PainelExpansionComponent } from './componentes/painel-expansion/painel-expansion.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SlideComponent,
    PainelExpansionComponent,
  
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    
  ],
  exports:[
    MatButtonModule,
    SlideComponent,
    MatExpansionModule,
    PainelExpansionComponent,
    MatIconModule,

  ]
})
export class SharedModule { }
