import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'exponentialStrength' })
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, expo?: number): number {
    //Math.pow(base, exponential);
    return Math.pow(value, isNaN(expo) ? 1 : expo);
  }
}

// This pipe definition reveals the following key points:
// A pipe is a class decorated with pipe metadata.
// The pipe class implements the PipeTransform interface's transform method that
// accepts an input value followed by optional parameters and returns the transformed value.
// There will be one additional argument to the transform method for each parameter
// passed to the pipe. Your pipe has one such parameter: the exponent.
// To tell Angular that this is a pipe, you apply the @Pipe decorator, which you import
// from the core Angular library.
// The @Pipe decorator allows you to define the pipe name that you'll use within template
// expressions. It must be a valid JavaScript identifier. Your pipe's name is exponentialStrength.

// Note the following:
// You use your custom pipe the same way you use built-in pipes.
// You must include your pipe in the declarations array of the AppModule
// If you choose to inject your pipe into a class, you must provide it in the providers array of
// your NgModule.
