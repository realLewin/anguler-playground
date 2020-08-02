import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { UserOverlayConfig } from '../models/overlay-config';
import { DEFAULT_CONFIG } from '../data/default-config';
import { PreviewOverlayRef } from '../preview-overlay-ref';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { FILE_PREVIEW_DIALOG_DATA } from '../file-preview-overlay.tokens';
import { OpenedOverlayComponent } from '../opened-overlay/opened-overlay.component';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open(config: UserOverlayConfig = {}) {
    // Overrride default configuration;
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    //Returns an OverlayRef which is a PortalHost;
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control;
    const dialogRef = new PreviewOverlayRef(overlayRef);
    const overlayComponent = this.attachDialogContainer(
      overlayRef,
      config,
      dialogRef
    );

    overlayRef.backdropClick().subscribe((_) => dialogRef.close());

    return dialogRef;
  }

  createOverlay(config: UserOverlayConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  getOverlayConfig(config: UserOverlayConfig): OverlayConfig {
    // Set the position strategy;
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });

    return overlayConfig;
  }

  private attachDialogContainer(
    overlayRef: OverlayRef,
    config: UserOverlayConfig,
    dialogRef: PreviewOverlayRef
  ) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(
      OpenedOverlayComponent,
      null,
      injector
    );
    const containerRef: ComponentRef<OpenedOverlayComponent> = overlayRef.attach(
      containerPortal
    );

    return containerRef.instance;
  }

  private createInjector(
    config: UserOverlayConfig,
    dialogRef: PreviewOverlayRef
  ): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(PreviewOverlayRef, dialogRef);
    injectionTokens.set(FILE_PREVIEW_DIALOG_DATA, config.image);

    return new PortalInjector(this.injector, injectionTokens);
  }
}

// The simplest version;
// open() {
//   const overlayRef = this.overlay.create({
//     width: '400px',
//     height: '400px',
//   });

//   const previewPortal = new ComponentPortal(OpenedOverlayComponent);

//   overlayRef.attach(previewPortal);
// }

// import { Injectable, Inject, OnInit, Injector, ComponentRef } from '@angular/core';
// import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
// import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
// import { FilePreviewOverlayComponent } from './file-preview-overlay.component';
// import { FilePreviewOverlayRef } from './file-preview-overlay-ref';
// import { FILE_PREVIEW_DIALOG_DATA } from './file-preview-overlay.tokens';

//   constructor(
//     private injector: Injector,
//     private overlay: Overlay) { }
