import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { AuthComponent } from "./auth.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
  declarations: [AuthComponent, SignInComponent, SignUpComponent],
  imports: [NativeScriptCommonModule, AuthRoutingModule],
})
export class AuthModule {}
