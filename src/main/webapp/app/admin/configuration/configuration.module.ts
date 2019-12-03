import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipstermicroservicegatewaySharedModule } from 'app/shared/shared.module';

import { JhiConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [JhipstermicroservicegatewaySharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [JhiConfigurationComponent]
})
export class ConfigurationModule {}
