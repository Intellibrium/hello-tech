
export class ValidationsService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
      let config = {
          'required': 'Required',
          'invalidEmailAddress': 'Invalid email address(Ex:name@gmail.co)',
          'minlength': `Minimum length ${validatorValue.requiredLength}`,
          'maxlength': `Maximum length ${validatorValue.requiredLength}`
      };

      return config[validatorName];
  }

  static emailValidator(control) {
      // RFC 2822 compliant regex
      if (control.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
          return null;
      } else {
          return { 'invalidEmailAddress': true };
      }
  }
}



