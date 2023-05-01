// английская и беларуская раскладка клавиатуры

import { capslockAction } from './actions.js';
import { backspaceAction } from './actions.js';
import { altAction, ctrlAction, shiftAction, spaceAction, tabAction, delAction, enterAction, arrowBackAction, arrowForwardAction } from './actions.js';

const makeButton = (character, characterCapital, keyCode, color = 'grey', action = undefined, size = 1) => {
  return {
    character,
    characterCapital,
    keyCode,
    color,
    action,
    size,
  };
}


const keyboardButtonsEng = [
  [
    makeButton('`', '~', 'Backquote'),
    makeButton('1', '!', 'Digit1'),
    makeButton('2', '@', 'Digit2'),
    makeButton('3', '#', 'Digit3'),
    makeButton('4', '$', 'Digit4'),
    makeButton('5', '%', 'Digit5'),
    makeButton('6', '^', 'Digit6'),
    makeButton('7', '&', 'Digit7'),
    makeButton('8', '*', 'Digit8'),
    makeButton('9', '(', 'Digit9'),
    makeButton('0', ')', 'Digit0'),
    makeButton('-', '_', 'Minus'),
    makeButton('=', '+', 'Equal'),
    makeButton('Backspace', 'Backspace', 'backspace', 'black', backspaceAction, 2),
  ],

  [
    makeButton('Tab', 'Tab', 'Tab', 'black', tabAction),
    makeButton('q', 'Q', 'KeyQ'),
    makeButton('w', 'W', 'KeyW'),
    makeButton('e', 'E', 'KeyE'),
    makeButton('r', 'R', 'KeyR'),
    makeButton('t', 'T', 'KeyT'),
    makeButton('y', 'Y', 'KeyY'),
    makeButton('u', 'U', 'KeyU'),
    makeButton('i', 'I', 'KeyI'),
    makeButton('o', 'O', 'KeyO'),
    makeButton('p', 'P', 'KeyP'),
    makeButton('[', '{', 'BracketLeft'),
    makeButton(']', '}', 'BracketRight'),
    makeButton('\/', '|', 'Backslash'),
    makeButton('DEL', 'DEL', 'Delete', 'black', delAction),
  ],

  [
    makeButton('Caps lock', 'Caps lock', 'CapsLock', 'black', capslockAction, 2),
    makeButton('a', 'A', 'KeyA'),
    makeButton('s', 'S', 'KeyS'),
    makeButton('d', 'D', 'KeyD'),
    makeButton('f', 'F', 'KeyF'),
    makeButton('g', 'G', 'KeyG'),
    makeButton('h', 'H', 'KeyH'),
    makeButton('j', 'J', 'KeyJ'),
    makeButton('k', 'K', 'KeyK'),
    makeButton('l', 'L', 'KeyL'),
    makeButton(';', ':', 'Semicolon'),
    makeButton("'", '"', 'Quote'),
    makeButton('Enter', 'Enter', 'Enter', 'black', enterAction, 2),
  ],

  [
    makeButton('Shift', 'Shift', 'ShiftLeft', 'black', shiftAction, 2),
    makeButton('z', 'Z', 'KeyZ'),
    makeButton('x', 'X', 'KeyX'),
    makeButton('c', 'C', 'KeyC'),
    makeButton('v', 'V', 'KeyV'),
    makeButton('b', 'B', 'KeyB'),
    makeButton('n', 'N', 'KeyN'),
    makeButton('m', 'M', 'KeyM'),
    makeButton(',', '<', 'Comma'),
    makeButton('.', '>', 'Period'),
    makeButton('/', '?', 'Slash'),
    makeButton('⇧', '⇧', 'ArrowUp', 'black'),
    makeButton('Shift', 'Shift', 'ShiftRight', 'black', shiftAction, 2),
  ],

  [
    makeButton('Ctrl', 'Ctrl', 'ControlLeft', 'black', ctrlAction),
    makeButton('Win', 'Win', 'MetaLeft', 'black'),
    makeButton('Alt', 'Alt', 'AltLeft', 'black', altAction),
    makeButton('', '', 'Space', 'grey', spaceAction, 5),
    makeButton('Alt', 'Alt', 'AltRight', 'black', altAction),
    makeButton('Ctrl', 'Ctrl', 'ControlRight', 'black', ctrlAction),
    makeButton('⇦', '⇦', 'ArrowLeft', 'black', arrowBackAction),
    makeButton('⇩', '⇩', "ArrowDown", 'black'),
    makeButton('⇨', '⇨', "ArrowRight", 'black', arrowForwardAction),
    makeButton('Ctrl', 'Ctrl', "ControlRight", 'black', ctrlAction),
  ],

];

const keyboardButtonsBlr = [
  [
    makeButton('ё', 'Ё', 'Backquote'),
    makeButton('1', '!', 'Digit1'),
    makeButton('2', '"', 'Digit2'),
    makeButton('3', '№', 'Digit3'),
    makeButton('4', ';', 'Digit4'),
    makeButton('5', '%', 'Digit5'),
    makeButton('6', ':', 'Digit6'),
    makeButton('7', '?', 'Digit7'),
    makeButton('8', '*', 'Digit8'),
    makeButton('9', '(', 'Digit9'),
    makeButton('0', ')', 'Digit0'),
    makeButton('-', '_', 'Minus'),
    makeButton('=', '+', 'Equal'),
    makeButton('Backspace', 'Backspace', 'backspace', 'black', backspaceAction, 2),
  ],

  [
    makeButton('Tab', 'Tab', 'Tab', 'black', tabAction),
    makeButton('й', 'Й', 'KeyQ'),
    makeButton('ц', 'Ц', 'KeyW'),
    makeButton('у', 'У', 'KeyE'),
    makeButton('к', 'К', 'KeyR'),
    makeButton('е', 'Е', 'KeyT'),
    makeButton('н', 'Н', 'KeyY'),
    makeButton('г', 'Г', 'KeyU'),
    makeButton('ш', 'Ш', 'KeyI'),
    makeButton('ў', 'Ў', 'KeyO'),
    makeButton('з', 'З', 'KeyP'),
    makeButton('х', 'Х', 'BracketLeft'),
    makeButton("'", "'", 'BracketRight'),
    makeButton('\/', '/', 'Backslash'),
    makeButton('DEL', 'DEL', 'Delete', 'black', delAction),
  ],

  [
    makeButton('Caps lock', 'Caps lock', 'Capslock', 'black', capslockAction, 2),
    makeButton('ф', 'Ф', 'KeyA'),
    makeButton('ы', 'Ы', 'KeyS'),
    makeButton('в', 'В', 'KeyD'),
    makeButton('а', 'А', 'KeyF'),
    makeButton('п', 'П', 'KeyG'),
    makeButton('р', 'Р', 'KeyH'),
    makeButton('о', 'О', 'KeyJ'),
    makeButton('л', 'Л', 'KeyK'),
    makeButton('д', 'Д', 'KeyL'),
    makeButton('ж', 'Ж', 'Semicolon'),
    makeButton("э", 'Э', 'Quote'),
    makeButton('Enter', 'Enter', 'Enter', 'black', enterAction, 2),
  ],

  [
    makeButton('Shift', 'Shift', 'ShiftLeft', 'black', shiftAction, 2),
    makeButton('я', 'Я', 'KeyZ'),
    makeButton('ч', 'Ч', 'KeyX'),
    makeButton('с', 'С', 'KeyC'),
    makeButton('м', 'М', 'KeyV'),
    makeButton('і', 'І', 'KeyB'),
    makeButton('т', 'Т', 'KeyN'),
    makeButton('ь', 'Ь', 'KeyM'),
    makeButton('б', 'Б', 'Comma'),
    makeButton('ю', 'Ю', 'Period'),
    makeButton('.', ',', 'Slash'),
    makeButton('⇧', '⇧', 'ArrowUp', 'black'),
    makeButton('Shift', 'Shift', 'ShiftRight', 'black', shiftAction, 2),
  ],

  [
    makeButton('Ctrl', 'Ctrl', 'ControlLeft', 'black', ctrlAction),
    makeButton('Win', 'Win', 'MetaLeft', 'black'),
    makeButton('Alt', 'Alt', 'AltLeft', 'black', altAction),
    makeButton('', '', 'Space', 'grey', spaceAction, 5),
    makeButton('Alt', 'Alt', 'AltRight', 'black', altAction),
    makeButton('Ctrl', 'Ctrl', 'ControlRight', 'black', ctrlAction),
    makeButton('⇦', '⇦', 'ArrowLeft', 'black', arrowBackAction),
    makeButton('⇩', '⇩', 'ArrowDown', 'black'),
    makeButton('⇨', '⇨', 'ArrowRight', 'black', arrowForwardAction),
    makeButton('Ctrl', 'Ctrl', 'ControlRight', 'black', ctrlAction),
  ],

];


export const languages = Object.freeze({
  'en': keyboardButtonsEng,
  'by': keyboardButtonsBlr,
});