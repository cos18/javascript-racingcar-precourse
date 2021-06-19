export function runRace(cars, count, resultContainer) {
  for (let i = 0; i < count; i += 1) {
    let statusString = '';
    cars.forEach((car) => {
      car.go();
      statusString += car.getStatus();
      statusString += '<br>';
    });
    statusString += '<br>';
    resultContainer.innerHTML += statusString;
  }
}

function getPath(pos) {
  let result = '';
  for (let i = 0; i < pos; i += 1) {
    result += '-';
  }
  return result;
}

export default function Car(name) {
  this.name = name;
  this.pos = 0;

  this.go = () => {
    if (Math.floor(Math.random() * 10) >= 4) {
      this.pos += 1;
    }
  };

  this.getStatus = () => `${this.name}: ${getPath(this.pos)}`;
}
