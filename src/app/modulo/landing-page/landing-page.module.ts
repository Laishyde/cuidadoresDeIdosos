import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './views/landing-page.component';
import { HeadingComponent } from './components/heading/heading.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ContainerComponent } from './components/container/container.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HeadingComponent,
    RodapeComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LandingPageComponent
  ]
})
export class LandingPageModule { }
