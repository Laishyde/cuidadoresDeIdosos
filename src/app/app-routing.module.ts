import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular'

@NgModule({
    imports: [UIRouterModule.forRoot()],
    providers: [
        Location,
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ],
    exports: [UIRouterModule]
})
export class AppRoutingModule { }