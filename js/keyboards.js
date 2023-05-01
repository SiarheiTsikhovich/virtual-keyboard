// английская и беларуская раскладка клавиатуры

import { capslockAction } from './actions.js';
import { backspaceAction } from './actions.js';
import {altAction, ctrlAction, shiftAction, spaceAction, tabAction, delAction, enterAction, arrowBackAction, arrowForwardAction} from './actions.js';

const makeButton = (character, characterCapital, color = 'grey', action = undefined, size = 1, code) => {
  return {
    character, 
    characterCapital,
    color, 
    action, 
    size,
    code,
  };
} 


const keyboardButtonsEng = [
  [
    makeButton('`', '~', 'grey', undefined, 1, 'Backquote'),
    makeButton('1', '!', 'grey', undefined, 1, 'Digit1'),
    makeButton('2', '@', 'grey', undefined, 1, 'Digit2'), 
    makeButton('3', '#', 'grey', undefined, 1, 'Digit3'), 
    makeButton('4', '$', 'grey', undefined, 1, 'Digit4'), 
    makeButton('5', '%', 'grey', undefined, 1, 'Digit5'), 
    makeButton('6', '^', 'grey', undefined, 1, 'Digit6'),
    makeButton('7', '&', 'grey', undefined, 1, 'Digit7'),
    makeButton('8', '*', 'grey', undefined, 1, 'Digit8'), 
    makeButton('9', '(', 'grey', undefined, 1, 'Digit9'), 
    makeButton('0', ')', 'grey', undefined, 1, 'Digit0'), 
    makeButton('-', '_', 'grey', undefined, 1, 'Minus'), 
    makeButton('=', '+', 'grey', undefined, 1, 'Equal'), 
    makeButton('Backspace', 'Backspace', 'black', backspaceAction, 2, 'backspace'),
  ],
  
  [
    makeButton('Tab', 'Tab', 'black', tabAction, 1, 'Tab'),
    makeButton('q', 'Q', 'grey', undefined, 1, 'KeyQ'), 
    makeButton('w', 'W', 'grey', undefined, 1, 'KeyW'),                            
    makeButton('e', 'E', 'grey', undefined, 1, 'KeyE'), 
    makeButton('r', 'R', 'grey', undefined, 1, 'KeyR'), 
    makeButton('t', 'T', 'grey', undefined, 1, 'KeyT'), 
    makeButton('y', 'Y', 'grey', undefined, 1, 'KeyY'), 
    makeButton('u', 'U', 'grey', undefined, 1, 'KeyU'), 
    makeButton('i', 'I', 'grey', undefined, 1, 'KeyI'), 
    makeButton('o', 'O', 'grey', undefined, 1, 'KeyO'), 
    makeButton('p', 'P', 'grey', undefined, 1, 'KeyP'), 
    makeButton('[', '{', 'grey', undefined, 1, 'BracketLeft'), 
    makeButton(']', '}', 'grey', undefined, 1, 'BracketRight'), 
    makeButton('\/', '|', 'grey', undefined, 1, 'Backslash'), 
    makeButton('DEL', 'DEL', 'black', delAction, 1, 'Delete'), 
  ],

  [
    makeButton('Caps lock', 'Caps lock', 'black', capslockAction, 2, 'CapsLock'), 
    makeButton('a', 'A', 'grey', undefined, 1, 'KeyA'), 
    makeButton('s', 'S', 'grey', undefined, 1, 'KeyS'), 
    makeButton('d', 'D', 'grey', undefined, 1, 'KeyD'), 
    makeButton('f', 'F', 'grey', undefined, 1, 'KeyF'), 
    makeButton('g', 'G', 'grey', undefined, 1, 'KeyG'), 
    makeButton('h', 'H', 'grey', undefined, 1, 'KeyH'), 
    makeButton('j', 'J', 'grey', undefined, 1, 'KeyJ'), 
    makeButton('k', 'K', 'grey', undefined, 1, 'KeyK'), 
    makeButton('l', 'L', 'grey', undefined, 1, 'KeyL'), 
    makeButton(';', ':', 'grey', undefined, 1, 'Semicolon'), 
    makeButton("'", '"', 'grey', undefined, 1, 'Quote'), 
    makeButton('Enter',  'Enter', 'black', enterAction, 2, 'Enter'), 
  ],

  [
    makeButton('Shift', 'Shift', 'black', shiftAction, 2, 'ShiftLeft'),  
    makeButton('z', 'Z', 'grey', undefined, 1, 'KeyZ'), 
    makeButton('x', 'X', 'grey', undefined, 1, 'KeyX'), 
    makeButton('c', 'C', 'grey', undefined, 1, 'KeyC'), 
    makeButton('v', 'V', 'grey', undefined, 1, 'KeyV'), 
    makeButton('b', 'B', 'grey', undefined, 1, 'KeyB'),  
    makeButton('n', 'N', 'grey', undefined, 1, 'KeyN'), 
    makeButton('m', 'M', 'grey', undefined, 1, 'KeyM'), 
    makeButton(',', '<', 'grey', undefined, 1, 'Comma'), 
    makeButton('.', '>', 'grey', undefined, 1, 'Period'), 
    makeButton('/', '?', 'grey', undefined, 1, 'Slash'), 
    makeButton('⇧', '⇧', 'black', undefined, 1, 'ArrowUp'), 
    makeButton('Shift', 'Shift', 'black', shiftAction, 2, 'ShiftRight'),
  ],
 
  [
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction, 1, 'ControlLeft'),
    makeButton('Win', 'Win', 'black', undefined, 1, 'MetaLeft'), 
    makeButton('Alt', 'Alt', 'black', altAction, 1, 'AltLeft'), 
    makeButton('', '', 'grey', spaceAction, 5, 'Space'), 
    makeButton('Alt', 'Alt', 'black', altAction, 1, 'AltRight'), 
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction, 1, 'ControlRight'), 
    makeButton('⇦', '⇦', 'black', arrowBackAction, 1, 'ArrowLeft'), 
    makeButton('⇩', '⇩', 'black', undefined, 1, 'ArrowDown'), 
    makeButton('⇨', '⇨', 'black', arrowForwardAction, 1, 'ArrowRight'),
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction, 1, 'ControlRight'),
  ],

];

const keyboardButtonsBlr = [
  [
    makeButton('ё', 'Ё', 'grey', undefined, 1, 'Backquote'), 
    makeButton('1', '!', 'grey', undefined, 1, 'Digit1'), 
    makeButton('2', '"', 'grey', undefined, 1, 'Digit2'), 
    makeButton('3', '№', 'grey', undefined, 1, 'Digit3'), 
    makeButton('4', ';', 'grey', undefined, 1, 'Digit4'), 
    makeButton('5', '%', 'grey', undefined, 1, 'Digit5'), 
    makeButton('6', ':', 'grey', undefined, 1, 'Digit6'), 
    makeButton('7', '?', 'grey', undefined, 1, 'Digit7'), 
    makeButton('8', '*', 'grey', undefined, 1, 'Digit8'), 
    makeButton('9', '(', 'grey', undefined, 1, 'Digit9'), 
    makeButton('0', ')', 'grey', undefined, 1, 'Digit0'), 
    makeButton('-', '_', 'grey', undefined, 1, 'Minus'), 
    makeButton('=', '+', 'grey', undefined, 1, 'Equal'), 
    makeButton('Backspace', 'Backspace', 'black', backspaceAction, 2, 'backspace'),
  ],
  
  [
    makeButton('Tab', 'Tab', 'black', tabAction, 1, 'Tab'), 
    makeButton('й', 'Й', 'grey', undefined, 1, 'KeyQ'), 
    makeButton('ц', 'Ц', 'grey', undefined, 1, 'KeyW'), 
    makeButton('у', 'У', 'grey', undefined, 1, 'KeyE'), 
    makeButton('к', 'К', 'grey', undefined, 1, 'KeyR'), 
    makeButton('е', 'Е', 'grey', undefined, 1, 'KeyT'), 
    makeButton('н', 'Н', 'grey', undefined, 1, 'KeyY'), 
    makeButton('г', 'Г', 'grey', undefined, 1, 'KeyU'), 
    makeButton('ш', 'Ш', 'grey', undefined, 1, 'KeyI'), 
    makeButton('ў', 'Ў', 'grey', undefined, 1, 'KeyO'), 
    makeButton('з', 'З', 'grey', undefined, 1, 'KeyP'), 
    makeButton('х', 'Х', 'grey', undefined, 1, 'BracketLeft'), 
    makeButton("'", "'", 'grey', undefined, 1, 'BracketRight'), 
    makeButton('\/', '/', 'grey', undefined, 1, 'Backslash'), 
    makeButton('DEL', 'DEL', 'black', delAction, 1, 'Delete'), 
  ],

  [
    makeButton('Caps lock', 'Caps lock', 'black', capslockAction, 2, 'Capslock'), 
    makeButton('ф', 'Ф', 'grey', undefined, 1, 'KeyA'), 
    makeButton('ы', 'Ы', 'grey', undefined, 1, 'KeyS'), 
    makeButton('в', 'В', 'grey', undefined, 1, 'KeyD'), 
    makeButton('а', 'А', 'grey', undefined, 1, 'KeyF'), 
    makeButton('п', 'П', 'grey', undefined, 1, 'KeyG'), 
    makeButton('р', 'Р', 'grey', undefined, 1, 'KeyH'), 
    makeButton('о', 'О', 'grey', undefined, 1, 'KeyJ'), 
    makeButton('л', 'Л', 'grey', undefined, 1, 'KeyK'), 
    makeButton('д', 'Д', 'grey', undefined, 1, 'KeyL'), 
    makeButton('ж', 'Ж', 'grey', undefined, 1, 'Semicolon'), 
    makeButton("э", 'Э', 'grey', undefined, 1, 'Quote'), 
    makeButton('Enter',  'Enter', 'black', enterAction, 2, 'Enter'), 
  ],

  [
    makeButton('Shift', 'Shift', 'black', shiftAction, 2, 'ShiftLeft'), 
    makeButton('я', 'Я', 'grey', undefined, 1, 'KeyZ'), 
    makeButton('ч', 'Ч', 'grey', undefined, 1, 'KeyX'), 
    makeButton('с', 'С', 'grey', undefined, 1, 'KeyC'), 
    makeButton('м', 'М', 'grey', undefined, 1, 'KeyV'), 
    makeButton('і', 'І', 'grey', undefined, 1, 'KeyB'), 
    makeButton('т', 'Т', 'grey', undefined, 1, 'KeyN'), 
    makeButton('ь', 'Ь', 'grey', undefined, 1, 'KeyM'), 
    makeButton('б', 'Б', 'grey', undefined, 1, 'Comma'), 
    makeButton('ю', 'Ю', 'grey', undefined, 1, 'Period'), 
    makeButton('.', ',', 'grey', undefined, 1, 'Slash'), 
    makeButton('⇧', '⇧', 'black', undefined, 1, 'ArrowUp'), 
    makeButton('Shift', 'Shift', 'black', shiftAction, 2, 'ShiftRight'),
  ],

  [
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction, 'ControlLeft'), 
    makeButton('Win', 'Win', 'black', undefined, 1, 'MetaLeft'), 
    makeButton('Alt', 'Alt', 'black', altAction, 'AltLeft'), 
    makeButton('', '', 'grey', spaceAction, 5, 'Space'), 
    makeButton('Alt', 'Alt', 'black', altAction, 1, 'AltRight'), 
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction, 1, 'ControlRight'), 
    makeButton('⇦', '⇦', 'black', arrowBackAction, 1, 'ArrowLeft'), 
    makeButton('⇩', '⇩', 'black', undefined, 1, 'ArrowDown'), 
    makeButton('⇨', '⇨', 'black', arrowForwardAction, 1, 'ArrowRight'),
    makeButton('Ctrl', 'Ctrl', 'black', ctrlAction, 1, 'ControlRight'),
  ],

];


export const languages = Object.freeze({
  'en': keyboardButtonsEng,
  'by': keyboardButtonsBlr,
});