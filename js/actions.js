import {queryTextArea} from './queries.js';
import {drawKeyboardinContainer} from './drawkeyboard.js';
import { drawKeyboard } from './drawkeyboard.js';
export let shiftPressed = false;
export let capslockPressed = false;
export let ctrlPressed = false;
export let currentLanguage = 'en';


export const defaultAction = (character, characterCapital) => {
  const textArea = queryTextArea();
  textArea.append(`${!shiftPressed && !capslockPressed ? character : characterCapital}`);
  shiftOff();
  ctrlOff();
  const currentLength = textArea.selectionStart;
  console.log (currentLength);
  console.log(textArea.selectionEnd);
  drawKeyboardinContainer();
  moveTextAreaCursorForward(currentLength + 1);
}

export const arrowBackAction = () => {
  const textArea = queryTextArea();
  textArea.selectionStart = textArea.selectionStart - 1;
  textArea.selectionEnd = textArea.selectionEnd - 1;
  console.log (textArea.selectionStart);
}

export const arrowForwardAction = () => {
  moveTextAreaCursorForward();
}

const moveTextAreaCursorForward = (length) => {
  const textArea = queryTextArea();
  textArea.selectionStart = textArea.selectionStart + (length || 1);
}

export const backspaceAction = () => {
  const textArea = queryTextArea();
  const textContentLength = textArea.textContent.length;
  const selectionStart = textArea.selectionStart;
  const selectionEnd = textArea.selectionEnd;
  const contentStart = textArea.textContent.substr(0, selectionStart - 1);
  const contentEnd = textArea.textContent.substr(selectionEnd, textContentLength);
  const backSpaceContent = `${contentStart}${contentEnd}`;
  textArea.textContent = backSpaceContent;
  moveTextAreaCursorForward(selectionStart - 1);
} 

export const delAction = () => {
  const textArea = queryTextArea();
  const delContent = textArea.textContent.slice(0, -1);
  textArea.textContent = delContent;
}

export const enterAction = () => {
  const textArea = queryTextArea();
  const enterContent = textArea.textContent += '\n';
  textArea.textContent = enterContent;
}

export const tabAction = () => {
  const textArea = queryTextArea();
  const tabContent = textArea.textContent += "    ";
  textArea.textContent = tabContent;
}

export const spaceAction = () => {
  const textArea = queryTextArea();
  const spaceContent = textArea.textContent += " ";
  textArea.textContent = spaceContent;
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

export const capslockAction = () => { 
  capslockPressed = !capslockPressed;
  const textArea = queryTextArea();
  drawKeyboardinContainer();
}
