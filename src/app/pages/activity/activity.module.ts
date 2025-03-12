import { NativeScriptCommonModule } from "@nativescript/angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { ActivityRoutingModule } from "./activity-routing.module";
import { ActivityComponent } from "./activity.component";

@NgModule({
  declarations: [ActivityComponent],
  imports: [NativeScriptCommonModule, ActivityRoutingModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ActivityModule {}
