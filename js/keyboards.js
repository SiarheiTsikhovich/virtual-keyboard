// английская и беларуская раскладка клавиатуры

import { capslockAction } from './actions.js';
import { backspaceAction } from './actions.js';
import {altAction, ctrlAction, shiftAction, spaceAction, tabAction, delAction, enterAction, arrowBackAction, arrowForwardAction} from './actions.js';

const makeButton = (character, characterCapital, color = 'grey', action = undefined, size = 1) => {
  return {
    character, 
    characterCapital,
    color, 
    action, 
    size,
  };
} 

const keyboardButtonsEng = [
  [
    makeButton('`', '~'),
    makeButton('1', '!'),
    makeButton('2', '@'), 
    makeButton('3', '#'), 
    makeButton('4', '$'), 
    makeButton('5', '%'), 
    makeButton('6', '^'),
    makeButton('7', '&'),
    makeButton('8', '*'), 
    makeButton('9', '('), 
    makeButton('0', ')'), 
    makeButton('-', '_'), 
    makeButton('=', '+'), 
    makeButton('Backspace', 'Backspace', 'black', backspaceAction, 2),
  ],
  
  [
    makeButton('Tab', 'Tab', 'black', tabAction, 1),
    makeButton('q', 'Q'), 
    makeButton('w', 'W'), 
    makeButton('e', 'E'), 
    makeButton('r', 'R'), 
    makeButton('t', 'T'), 
    makeButton('y', 'Y'), 
    makeButton('u', 'U'), 
    makeButton('i', 'I'), 
    makeButton('o', 'O'), 
    makeButton('p', 'P'), 
    makeButton('[', '{'), 
    makeButton(']', '}'), 
    makeButton('\/', '|'), 
    makeButton('DEL', 'DEL', 'black', delAction, 1), 
  ],

  [
    makeButton('Caps lock', 'Caps lock', 'black', capslockAction, 2), 
    makeButton('a', 'A'), 
    makeButton('s', 'S'), 
    makeButton('d', 'D'), 
    makeButton('f', 'F'), 
    makeButton('g', 'G'), 
    makeButton('h', 'H'), 
    makeButton('j', 'J'), 
    makeButton('k', 'K'), 
    makeButton('l', 'L'), 
    makeButton(';', ':'), 
    makeButton("'", '"'), 
    makeButton('Enter',  'Enter', 'black', enterAction, 2), 
  ],

  [
    makeButton('Shift', 'Shift', 'black', shiftAction, 2),  
    makeButton('z', 'Z'), 
    makeButton('x', 'X'), 
    makeButton('c', 'C'), 
    makeButton('v', 'V'), 
    makeButton('b', 'B'),  
    makeButton('n', 'N'), 
    makeButton('m', 'M'), 
    makeButton(',', '<'), 
    makeButton('.', '>'), 
    makeButton('/', '?'), 
    makeButton('⇧', '⇧', 'black'), 
    makeButton('Shift', 'Shift', 'black', shiftAction, 2),
  ],

  [
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction, 1),
    makeButton('Win', 'Win', 'black'), 
    makeButton('Alt', 'Alt', 'black', altAction, 1), 
    makeButton('', '', 'grey', spaceAction, 5), 
    makeButton('Alt', 'Alt', 'black', altAction, 1), 
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction, 1), 
    makeButton('⇦', '⇦', 'black', arrowBackAction, 1), 
    makeButton('⇩', '⇩', 'black'), 
    makeButton('⇨', '⇨', 'black', arrowForwardAction, 1),
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction, 1),
  ],

];

const keyboardButtonsBlr = [
  [
    makeButton('ё', 'Ё'), 
    makeButton('1', '!'), 
    makeButton('2', '"'), 
    makeButton('3', '№'), 
    makeButton('4', ';'), 
    makeButton('5', '%'), 
    makeButton('6', ':'), 
    makeButton('7', '?'), 
    makeButton('8', '*'), 
    makeButton('9', '('), 
    makeButton('0', ')'), 
    makeButton('-', '_'), 
    makeButton('=', '+'), 
    makeButton('Backspace', 'Backspace', 'black', backspaceAction, 2),
  ],
  
  [
    makeButton('Tab', 'Tab', 'black', tabAction, 1), 
    makeButton('й', 'Й'), 
    makeButton('ц', 'Ц'), 
    makeButton('у', 'У'), 
    makeButton('к', 'К'), 
    makeButton('е', 'Е'), 
    makeButton('н', 'Н'), 
    makeButton('г', 'Г'), 
    makeButton('ш', 'Ш'), 
    makeButton('ў', 'Ў'), 
    makeButton('з', 'З'), 
    makeButton('х', 'Х'), 
    makeButton("'", "'"), 
    makeButton('\/', '/'), 
    makeButton('DEL', 'DEL', 'black', delAction, 1), 
  ],

  [
    makeButton('Caps lock', 'Caps lock', 'black', capslockAction, 2), 
    makeButton('ф', 'Ф'), 
    makeButton('ы', 'Ы'), 
    makeButton('в', 'В'), 
    makeButton('а', 'А'), 
    makeButton('п', 'П'), 
    makeButton('р', 'Р'), 
    makeButton('о', 'О'), 
    makeButton('л', 'Л'), 
    makeButton('д', 'Д'), 
    makeButton('ж', 'Ж'), 
    makeButton("э", 'Э'), 
    makeButton('Enter',  'Enter', 'black', enterAction, 2), 
  ],

  [
    makeButton('Shift', 'Shift', 'black', shiftAction, 2), 
    makeButton('я', 'Я'), 
    makeButton('ч', 'Ч'), 
    makeButton('с', 'С'), 
    makeButton('м', 'М'), 
    makeButton('і', 'І'), 
    makeButton('т', 'Т'), 
    makeButton('ь', 'Ь'), 
    makeButton('б', 'Б'), 
    makeButton('ю', 'Ю'), 
    makeButton('.', ','), 
    makeButton('⇧', '⇧', 'black'), 
    makeButton('Shift', 'Shift', 'black', shiftAction, 2),
  ],

  [
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction), 
    makeButton('Win', 'Win', 'black'), 
    makeButton('Alt', 'Alt', 'black', altAction), 
    makeButton('', '', 'grey', spaceAction, 5), 
    makeButton('Alt', 'Alt', 'black', altAction, 1), 
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction, 1), 
    makeButton('⇦', '⇦', 'black', arrowBackAction, 1), 
    makeButton('⇩', '⇩', 'black'), 
    makeButton('⇨', '⇨', 'black', arrowForwardAction, 1),
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction, 1),
  ],

];


export const languages = Object.freeze({
  'en': keyboardButtonsEng,
  'by': keyboardButtonsBlr,
});