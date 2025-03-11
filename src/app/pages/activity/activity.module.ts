import { NativeScriptCommonModule } from "@nativescript/angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { ActivityRoutingModule } from "./activity-routing.module";

@NgModule({
  declarations: [],
  imports: [NativeScriptCommonModule, ActivityRoutingModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ActivityModule {}
