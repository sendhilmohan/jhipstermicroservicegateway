import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipstermicroservicegatewaySharedModule } from 'app/shared/shared.module';
import { LocationComponent } from './location.component';
import { LocationDetailComponent } from './location-detail.component';
import { LocationUpdateComponent } from './location-update.component';
import { LocationDeleteDialogComponent } from './location-delete-dialog.component';
import { locationRoute } from './location.route';

@NgModule({
  imports: [JhipstermicroservicegatewaySharedModule, RouterModule.forChild(locationRoute)],
  declarations: [LocationComponent, LocationDetailComponent, LocationUpdateComponent, LocationDeleteDialogComponent],
  entryComponents: [LocationDeleteDialogComponent]
})
export class JhipstermicroservicegatewayLocationModule {}