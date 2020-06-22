import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  userId: string = '@Lewin7777777';
  userSettings: string[] = [
    'Account',
    'Privacy',
    'Safety',
    'Notification',
    'Preference',
  ];
  generalSettings: string[] = ['Display', 'Data', 'Accessibility', 'About'];
  constructor() {}

  ngOnInit(): void {}

  goBack() {}
}
