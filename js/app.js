
// создаем экран для отображения печатания
const textarea = document.createElement("textarea");
textarea.className = "textarea";
document.body.append(textarea);

// создаем клавиатуру
const keyboard = document.createElement("div");
keyboard.className = "keyboard";
document.body.append(keyboard);

const keyboardItems = document.createElement("div");
keyboardItems.className = "keyboard-items";
keyboard.appendChild(keyboardItems);

// функция для создания элементов - здесь подразумеваются кнопки
function createElement(tagName, className){
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}

// в кнопку мы передаем текст, текст с нажатым shift, цвет (по умолчанию серый), поведение (по умолчанию - печатать текст), размер.
const makeButton = (character, characterCapital, color = 'grey', action = undefined, size = 1) => {
  return {
    character, 
    characterCapital,
    color, 
    action, 
    size 
  };
} 

// английская раскладка клавиатуры
const keyboardButtonsEng = [
  [
    makeButton('`', '~'), makeButton('1', '!'), makeButton('2', '@'), makeButton('3', '#'), makeButton('4', '$'), makeButton('5', '%'), makeButton('6', '^'), makeButton('7', '&'), makeButton('8', '('), makeButton('0', ')'), makeButton('-', '_'), makeButton('=', '+'), makeButton('Backspace', 'Backspace', 'red', backspaceAction, 2),
  ],
  
  [
    makeButton('Tab', 'Tab'), makeButton('q', 'Q'), makeButton('w', 'W'), makeButton('e', 'E'), makeButton('r', 'R'), makeButton('t', 'T'), makeButton('y', 'Y'), makeButton('u', 'U'), makeButton('i', 'I'), makeButton('o', 'O'), makeButton('p', 'P'), makeButton('[', '{'), makeButton(']', '}'), makeButton('\/', '|'), makeButton('DEL', 'DEL', 'red', delAction, 1.5), 
  ],

  [
    makeButton('Caps lock', 'Caps lock', 'red', capslockAction, 2), makeButton('a', 'A'), makeButton('s', 'S'), makeButton('d', 'D'), makeButton('f', 'F'), makeButton('g', 'G'), makeButton('h', 'H'), makeButton('j', 'J'), makeButton('k', 'K'), makeButton('l', 'L'), makeButton(';', ':'), makeButton("'", '"'), makeButton('Enter',  'Enter', 'red', enterAction, 2), makeButton('\/', '|'), makeButton('DEL', 'DEL', 'red', delAction, 1.5), 
  ],

  [
    makeButton('Shift', 'Shift', 'red', shiftAction, 1.5), makeButton('\/', '\/'), makeButton('z', 'Z'), makeButton('x', 'X'), makeButton('c', 'C'), makeButton('v', 'V'), makeButton('b', 'B'), makeButton('n', 'N'), makeButton('m', 'M'), makeButton('n', 'N'), makeButton(',', '<'), makeButton('.', '>'), makeButton('/', '?'), makeButton('ArrowUp', 'ArrowUp', 'red', arrowUpAction), makeButton('Shift', 'Shift', 'red', shiftAction, 1.5),
  ],

  [
    makeButton('Ctrl', 'Ctrl', 'red', ctrlAction, 1.5), makeButton('Win', 'Win'), makeButton('Alt', 'Alt', 'red', altAction), makeButton('', '', 'red', spaceAction, 5), makeButton('Alt gr', 'Alt gr'), makeButton('Ctrl', 'Ctrl', 'red', ctrlAction, 1.5), makeButton('ArrowLeft', 'ArrowLeft', 'red', arrowLeftAction), makeButton('ArrowDown', 'ArrowDown', 'red', arrowDownAction), makeButton('ArrowRight', 'ArrowRight', 'red', arrowRightAction),
  ],

];


drawKeyboardinContainer();



