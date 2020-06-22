import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: 'account', component: AccountComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'safety', component: SafetyComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'preference', component: PreferenceComponent },
      { path: 'display', component: DisplayComponent },
      { path: 'data', component: DataUsageComponent },
      { path: 'accessibility', component: AccessibilityComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
