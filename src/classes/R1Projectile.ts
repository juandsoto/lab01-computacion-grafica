import Point from './Point';

class R1Projectile {
  v0: number;
  p0: number;
  positions: number[] = [];
  veryTop: boolean = false;
  static intervalId: NodeJS.Timer;

  constructor(v0: number, p0: number) {
    this.v0 = v0;
    this.p0 = p0;
    this.positions.push(this.p0);
  }

  move() {
    const positions = document.querySelector(
      '.r1_projectile_positions',
    ) as HTMLDivElement;
    const position = document.createElement('span');
    position.classList.add('r1_coordinate');
    position.innerHTML = `${this.p0.toString()} -> `;
    positions?.appendChild(position);
    console.log('move', this.p0.toString());
    if (!this.veryTop) {
      this.p0 = this.p0 + this.v0;
    } else {
      this.p0 = this.p0 - this.v0;
    }
    if (this.p0 === this.positions[0] + this.v0 * 5) this.veryTop = true;
    this.positions.push(this.p0);
  }

  update(interval: number) {
    const id = setInterval(() => {
      this.move();
      if (this.p0 < 0) clearInterval(id);
    }, interval);
    R1Projectile.intervalId = id;

    return () => clearInterval(id);
  }

  public static clearInterval() {
    clearInterval(this.intervalId);
  }
}

export default R1Projectile;
