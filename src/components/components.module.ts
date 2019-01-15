import { NgModule } from '@angular/core';
import { UserMgnComponent } from './user-mgn/user-mgn';
import { ReportMgnComponent } from './report-mgn/report-mgn';
@NgModule({
	declarations: [UserMgnComponent,
    ReportMgnComponent],
	imports: [],
	exports: [UserMgnComponent,
	ReportMgnComponent],
	// entryComponents: [
	// 	UserMgnComponent,
	// 	ReportMgnComponent
	// ]
})
export class ComponentsModule {}
