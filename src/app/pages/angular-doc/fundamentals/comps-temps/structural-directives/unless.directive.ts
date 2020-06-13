import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
//Don't forget to add this directive to the declarations array of the AppModule.

//    Creating a directive is similar to creating a component.
//          Import the Directive decorator (instead of the Component decorator).
//          Import the Input, TemplateRef, and ViewContainerRef symbols; you'll need them for
//          any structural directive.
//          Apply the decorator to the directive class.
//          Set the CSS attribute selector that identifies the directive when applied to an element
//          in a template.

// The directive's selector is typically the directive's attribute name in square brackets, [appUnless].
// The brackets define a CSS attribute selector
// The directive attribute name should be spelled in lowerCamelCase and begin with a prefix.
// Don't use ng. That prefix belongs to Angular. Pick something short that fits you or your company.
// In this example, the prefix is app.
@Directive({ selector: '[appUnless]' })
export class UnlessDirective {
  private hasView: boolean = false;
  // A simple structural directive like this one creates an embedded view from the Angular-generated
  // <ng-template> and inserts that view in a view container adjacent to the directive's original <p>
  // host element.
  // You'll acquire the <ng-template> contents with a TemplateRef and access the view container
  // through a ViewContainerRef.
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  // The directive consumer expects to bind a true/false condition to [appUnless].
  // That means the directive needs an appUnless property, decorated with @Input
  // Angular sets the appUnless property whenever the value of the condition changes.
  // Because the appUnless property does work, it needs a setter.
  // If the condition is falsy and the view hasn't been created previously, tell the view container to
  // create the embedded view from the template.
  // If the condition is truthy and the view is currently displayed, clear the container which also
  // destroys the view.
  // Nobody reads the appUnless property so it doesn't need a getter.
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
