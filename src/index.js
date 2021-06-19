import Car from './car.js';
import { initDOM, changeVisibie } from './dom-utils.js';
import checkNameVaild from './utils.js';

export default function RacingCarGame() {
  const cars = [];

  initDOM();

  const carNamesInput = document.getElementById('car-names-input');
  const carNamesSubmit = document.getElementById('car-names-submit');
  const racingCountContainer = document.querySelector('.car-game-container > div:last-child');
  // const racingCountInput = document.getElementById('racing-count-input');
  // const racingCountSubmit = document.getElementById('racing-count-submit');
  const resultContainer = document.querySelectorAll('#app > div')[1];

  changeVisibie(false, racingCountContainer, resultContainer);

  function onCarNamesClicked() {
    cars.length = 0;
    const nameString = carNamesInput.value;
    if (!checkNameVaild(nameString)) {
      alert('🚨 입력이 잘못되었습니다! 🚨');
      return;
    }
    nameString.split(',').forEach((name) => cars.push(new Car(name)));
    changeVisibie(true, racingCountContainer);
  }

  carNamesSubmit.addEventListener('click', onCarNamesClicked);
}

new RacingCarGame();
