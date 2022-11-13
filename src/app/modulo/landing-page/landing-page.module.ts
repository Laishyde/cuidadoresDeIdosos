import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './components/rodape/rodape.component';
import { HeadingComponent } from './components/heading/heading.component';
import { LandingPageComponent } from './views/landing-page.component';



@NgModule({
  declarations: [
    RodapeComponent,
    HeadingComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
