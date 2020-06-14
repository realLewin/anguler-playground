import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

// Use the following steps to take advantage of this service:
// Import the FormBuilder class.
// Inject the FormBuilder service.
// Generate the form contents.

// Use the following steps to add form validation:
// Import a validator function in your form component.
// Add the validator to the field in the form.
// Add logic to handle the validation status.
// Caution: Use these HTML5 validation attributes in combination with the built-in validators
// provided by Angular's reactive forms. Using these in combination prevents errors when the
// expression is changed after the template has been checked.

// To define a dynamic form, take the following steps.
// Import the FormArray class.
// Define a FormArray control.
// Access the FormArray control with a getter method.
// Display the form array in a template.

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  name: FormControl = new FormControl('');
  // userProfile: FormGroup = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     zipCode: new FormControl(''),
  //   }),
  // });
  //Same reactive form using formbuilder:
  userProfile: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      zipCode: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  // It's convenient to access a control through a getter, and this approach is easy to
  // repeat for additional controls.
  // Because the returned control is of the type AbstractControl, you need to provide an
  // explicit type to access the method syntax for the form array instance.
  get aliases(): FormArray {
    return this.userProfile.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  updateName(): void {
    this.name.setValue('Lewin');
  }
  onSubmit() {
    alert(`hello ${this.userProfile.get('firstName').value}`);
  }
  updateForm() {
    this.userProfile.patchValue({
      firstName: 'walter',
      lastName: 'lewin',
      address: {
        street: 'wall street',
        city: 'orgen',
        zipCode: 111,
      },
    });
  }
  addAliases() {
    this.aliases.push(this.fb.control(''));
  }
}
