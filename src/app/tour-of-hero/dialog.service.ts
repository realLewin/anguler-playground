import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  /**
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns observable resolving to `true`=confirm or `false`=cancel
   */
  confirm(message?: string): Observable<boolean> {
    const comfirmation = window.confirm(message || "it's OK ?");
    return of(comfirmation);
  }
}
