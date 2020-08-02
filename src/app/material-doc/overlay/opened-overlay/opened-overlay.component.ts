import { Component, OnInit, Inject } from '@angular/core';
import { PreviewOverlayRef } from '../preview-overlay-ref';
import { FILE_PREVIEW_DIALOG_DATA } from '../file-preview-overlay.tokens';

@Component({
  selector: 'app-opened-overlay',
  templateUrl: './opened-overlay.component.html',
  styleUrls: ['./opened-overlay.component.css'],
})
export class OpenedOverlayComponent implements OnInit {
  constructor(
    private dialogRef: PreviewOverlayRef,
    @Inject(FILE_PREVIEW_DIALOG_DATA) public image: any
  ) {}

  ngOnInit(): void {}
}
