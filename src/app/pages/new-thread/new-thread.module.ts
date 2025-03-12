import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NewThreadRoutingModule } from './new-thread-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular'
import { NewThreadComponent } from './new-thread.component';


@NgModule({
  declarations: [NewThreadComponent],
  imports: [
    NativeScriptCommonModule,
    NewThreadRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NewThreadModule { }
