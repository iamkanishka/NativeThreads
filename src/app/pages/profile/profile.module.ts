import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
 

import { ProfileRoutingModule } from './profile-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular'
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    NativeScriptCommonModule,
    ProfileRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }
