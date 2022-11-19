import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './components/rodape/rodape.component';
import { HeadingComponent } from './components/heading/heading.component';
import { LandingPageComponent } from './views/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { CardsComponent } from './components/cards/cards.component';




@NgModule({
  declarations: [
    RodapeComponent,
    HeadingComponent,
    LandingPageComponent,
    CardsComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
