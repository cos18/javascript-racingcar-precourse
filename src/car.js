export default function Car(name) {
  this.name = name;
  this.pos = 0;

  this.go = () => {
    if (Math.floor(Math.random() * 10) >= 4) {
      this.pos += 1;
    }
  };

  this.getStatus = () => `${this.name}: ${'-' * this.pos}`;
}
