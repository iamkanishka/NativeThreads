import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewThreadRoutingModule } from './new-thread-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular'


@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    NewThreadRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NewThreadModule { }
