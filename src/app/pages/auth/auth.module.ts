import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";
import { NativeScriptCommonModule } from "@nativescript/angular";

@NgModule({
  declarations: [],
  imports: [NativeScriptCommonModule, AuthRoutingModule],
})
export class AuthModule {}
