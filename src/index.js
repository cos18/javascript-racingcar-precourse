import initDOM from './dom-utils.js';
import checkNameVaild from './utils.js';

export default function RacingCarGame() {
  initDOM();

  const carNamesInput = document.getElementById('car-names-input');
  const carNamesSubmit = document.getElementById('car-names-submit');

  function onCarNamesClicked() {
    const nameString = carNamesInput.value;
    if (!checkNameVaild(nameString)) {
      alert('🚨 입력이 잘못되었습니다! 🚨');
      return;
    }
    const names = nameString.split(',');
    console.log(names);
  }

  carNamesSubmit.addEventListener('click', onCarNamesClicked);
}

new RacingCarGame();
