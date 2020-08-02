import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
import { STATIC_FILE_DATE } from '../data/data';
import { PreviewOverlayRef } from '../preview-overlay-ref';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
})
export class OverlayComponent implements OnInit {
  files = STATIC_FILE_DATE;

  constructor(private previewOverlay: OverlayService) {}

  ngOnInit(): void {}

  showPreview(file) {
    let dialogRef = this.previewOverlay.open({
      image: file,
    });
  }
}
