import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Directives must be declared in Angular Modules in the same manner as components.
// The @Directive decorator's lone configuration property specifies the directive's
// CSS attribute selector, [appHighlight].
// Though highlight would be a more concise selector than appHighlight and it would work,
// the best practice is to prefix selector names to ensure they don't conflict with standard
// HTML attributes. This also reduces the risk of colliding with third-party directive names.
// The CLI added the app prefix for you.
// The directive could be more dynamic. It could detect when the user mouses into or out of
// the element and respond by setting or clearing the highlight color.

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  constructor(private el: ElementRef) {
    // You use the ElementRef in the directive's constructor to inject a reference
    // to the host DOM element, the element to which you applied appHighlight.
    // ElementRef grants direct access to the host DOM element through its nativeElement property.
    // el.nativeElement.style.backgroundColor = 'yellow';
  }
  @Input() highlightColor1: string;
  // Inside the directive the property is known as highlightColor.
  // Outside the directive, where you bind to it, it's known as appHighlight.
  @Input('appHighLight') highlightColor2: string;
  @Input() defaultColor: string;

  // The @HostListener decorator lets you subscribe to events of the DOM element that hosts
  // an attribute directive,
  @HostListener('mouseenter') onMouseEnter() {
    // If someone neglects to bind to appHighlight, highlight the host element in red:
    this.highlight(this.highlightColor2 || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
