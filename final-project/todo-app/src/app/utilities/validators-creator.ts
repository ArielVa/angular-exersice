import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";
import {TODO_LIST_COLORS, TODO_LIST_ICONS} from "../models/todo-list.model";

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

  static iconColorComboValidator(color: string, icon: string): ValidatorFn  {

    return ctrl => {
      if(!(ctrl instanceof FormGroup)) return null;

      const icons = TODO_LIST_ICONS;
      const colors = TODO_LIST_COLORS;

      const iconControl = ctrl.get('icon');
      const colorControl = ctrl.get('color');

      const todoIcon = iconControl?.value;
      const todoColor = colorControl?.value;

      if(!icons.includes(icon)) return null;
      if(!colors.includes(color)) return null;

      if(!(todoColor === color && icon === todoIcon)) {
        return null;
      }

      return {
        'colorIconCombo': {
          'expectedColor': color,
          'expectedIcon': icon,
          'currentColor': todoColor,
          'currentIcon': todoIcon
        }
      };
    }
  }

}
