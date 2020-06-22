import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from 'src/app/app-material.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SafetyComponent } from './safety/safety.component';
import { NotificationComponent } from './notification/notification.component';
import { PreferenceComponent } from './preference/preference.component';
import { DisplayComponent } from './display/display.component';
import { DataUsageComponent } from './data-usage/data-usage.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    SettingsComponent,
    AccountComponent,
    PrivacyComponent,
    SafetyComponent,
    NotificationComponent,
    PreferenceComponent,
    DisplayComponent,
    DataUsageComponent,
    AccessibilityComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
  ],
})
export class SettingsModule {}
