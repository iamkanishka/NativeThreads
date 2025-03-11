import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
 
import { SettingsRoutingModule } from './settings-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular'


@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    SettingsRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SettingsModule { }
