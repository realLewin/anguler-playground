import { Component, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OpenedOverlayComponent } from './opened-overlay/opened-overlay.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
})
export class OverlayComponent implements OnInit {
  constructor(private overlay: Overlay) {}

  ngOnInit(): void {}

  openOverlay() {
    const overlayRef = this.overlay.create({
      width: '500px',
      height: '500px',
    });
    const overlayPortal = new ComponentPortal(OpenedOverlayComponent);
    overlayRef.attach(overlayPortal);
  }
}
