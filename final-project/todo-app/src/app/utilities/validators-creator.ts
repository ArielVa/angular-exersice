import {AbstractControl, ValidationErrors} from "@angular/forms";

export  class ValidatorsCreator {
  static minContentLengthValidator(length: number): (ctrl: AbstractControl) => null | ValidationErrors{
    return ctrl => {
      if(typeof(ctrl.value) !== 'string') return null;
      const len = ctrl.value.split('').reduce((len, current) => len + current.trim().length, 0);
      if(len >= length) return null;
      return {
        'minLength': {
          'required': length,
          'current': len
        }
      }
    }
  }

  static minNumOfWordsValidator(numWords: number): (ctrl: AbstractControl) => null | ValidationErrors{
    return ctrl => {

      if(typeof(ctrl.value) !== 'string') return null;
      const wordsCount = ctrl.value.split(' ').reduce((wordsCount, currentWord) => currentWord !== '' ? wordsCount + 1 : wordsCount , 0);
      if(wordsCount >= numWords) return null;
      return {
        'numWords': {
          'required': numWords,
          'current': wordsCount
        }
      }
    }
  }
}
