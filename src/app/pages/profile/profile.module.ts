import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular'


@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    ProfileRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }
