// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ChildWithSpecsComponent } from './child-with-specs.component';

@NgModule({
    imports: [

    ],
    declarations: [
        ChildWithSpecsComponent,
    ],
    exports: [
        ChildWithSpecsComponent,
    ]
})
export class ChildWithSpecsModule {

}
