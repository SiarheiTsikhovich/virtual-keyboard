import {queryTextArea} from './queries.js';
import {drawKeyboardinContainer} from './drawkeyboard.js';
export let shiftPressed = false;
export let ctrlPressed = false;
export let currentLanguage = 'en';

export const defaultAction = (character, characterCapital) => {
  const textArea = queryTextArea();
  textArea.textContent = `${textArea.textContent}${!shiftPressed ? character : characterCapital}`;
  shiftOff();
  ctrlOff();
  drawKeyboardinContainer();
}

export const backspaceAction = () => {
  const textArea = queryTextArea();
  const newContent = textArea.textContent.slice(1);
  textArea.textContent = newContent;
} 

export const ctrlAction = () => {
  ctrlPressed = !ctrlPressed;
  shiftOff();
  console.log ('ctrlAction');
}

export const ctrlOff = () => {
  ctrlPressed = false;
}

export const altAction = () => {
  console.log ('altAction', ctrlPressed);
  if (ctrlPressed) {
    if (currentLanguage === 'by') {
      currentLanguage = 'en'
    }
    else {
      currentLanguage = 'by';
    }
  }
  shiftOff();
  ctrlOff();
  drawKeyboardinContainer();
}


export const shiftOff = () => {
  shiftPressed = false;
}

export const shiftAction = () => {
  shiftPressed = !shiftPressed;
  ctrlOff();
  drawKeyboardinContainer();
}

