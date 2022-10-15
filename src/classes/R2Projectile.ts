import Point from './Point';

class R2Projectile {
  v0: number;
  p0: Point;
  positions: Point[] = [];
  veryTop: boolean = false;
  static intervalId: NodeJS.Timer;

  constructor(v0: number, p0: Point) {
    this.v0 = v0;
    this.p0 = p0;
    this.positions.push(this.p0);
  }

  move() {
    const positions = document.querySelector(
      '.r2_projectile_positions',
    ) as HTMLDivElement;
    const position = document.createElement('span');
    position.classList.add('r2_coordinate');
    position.innerHTML = `${this.p0.toString()} -> `;
    positions?.appendChild(position);
    console.log('move', this.p0.toString());
    if (!this.veryTop) {
      this.p0 = new Point(this.p0.x + this.v0, this.p0.y + 1);
    } else {
      this.p0 = new Point(this.p0.x + this.v0, this.p0.y - 1);
    }
    if (this.p0.y === this.positions[0].y + 5) this.veryTop = true;
    this.positions.push(this.p0);
  }

  update(interval: number) {
    const id = setInterval(() => {
      this.move();
      if (this.p0.y === -1) clearInterval(id);
    }, interval);
    R2Projectile.intervalId = id;

    return () => clearInterval(id);
  }

  public static clearInterval() {
    clearInterval(this.intervalId);
  }
}

export default R2Projectile;
