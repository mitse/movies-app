import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, AsyncValidator } from '@angular/forms';
// import { Observable, of, timer } from 'rxjs';
// import { switchMap, take } from 'rxjs/operators';

@Directive({
  selector: '[validateInput]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidateInputDirective, multi: true }]
})

export class ValidateInputDirective implements Validator {


  validate(control: AbstractControl): { [key: string]: any } | null {
    const value: string = control.value;

    if(!value)
      return null;

    if (value && value.length && value.length < 3)
      return { validateInputLength: true };

    const regex = new RegExp(/^[a-z0-9 ]+$/i);
    return regex.test(value) ? null : { validateInput: true }
  }
}

// export class ValidateInputDirective implements AsyncValidator {
//   validate(control: AbstractControl): Observable<{ [key: string]: any } | null> {
//     const value: string = control.value;
//     return this.validateObservable(value).pipe(take(1));
//   }

//   validateObservable(value) {
//     return timer(500).pipe(
//       switchMap(() => {
//         if (value && value.length < 3)
//         return of({ validateInput: false });

//         const regex = new RegExp(/^[a-z0-9 ]+$/i);
//         return regex.test(value) ? of(null) : of({ validateInput: false })
//       })
//     )
//   }

// }

