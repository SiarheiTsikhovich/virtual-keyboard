import {queryTextArea} from './queries.js';
import {drawKeyboardinContainer} from './drawkeyboard.js';
export let shiftPressed = false;
export let ctrlPressed = false;
export let currentLanguage = 'by';

export const defaultAction = (character, characterCapital) => {
  const textArea = queryTextArea();
  textArea.textContent = `${textArea.textContent}${!shiftPressed ? character : characterCapital}`;
  shiftOff();
  drawKeyboardinContainer();
}

export const backspaceAction = () => {
  const textArea = queryTextArea();
  const newContent = textArea.textContent.slice(1);
  textArea.textContent = newContent;
} 

export const ctrlAction = () => {
  console.log('ctrlAction');
}

export const altAction = () => {
  console.log('altAction')
}


export const shiftOff = () => {
  shiftPressed = false;
}

export const shiftAction = () => {
  shiftPressed = !shiftPressed;
  drawKeyboardinContainer();
}

