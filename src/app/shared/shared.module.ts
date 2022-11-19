import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { PainelExpansionComponent } from './componentes/painel-expansion/painel-expansion.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from './componentes/carousel/carousel.component';

@NgModule({
  declarations: [
    PainelExpansionComponent,
    CarouselComponent,
  
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    
  ],
  exports:[
    MatButtonModule,
    MatExpansionModule,
    PainelExpansionComponent,
    MatIconModule,
    CarouselComponent,

  ]
})
export class SharedModule { }
