import { Canvas, R1, R2, R3 } from './classes';
import R2Projectile from './classes/R2Projectile';
import Point from './classes/Point';
import R1Projectile from './classes/R1Projectile';

//R1
const canvasR1 = new Canvas();
const { canvas: R1Canvas, ctx: R1Ctx } = canvasR1.draw(
  document.getElementById('canvas_r1'),
);

R1Ctx.fillStyle = '#000000';

const r1 = new R1(R1Canvas, R1Ctx);
const R1_COORDINATES = { x: 6 };
const R1coordinates = document.querySelector('.r1_coordinates') as HTMLElement;
R1coordinates.innerHTML = `(${R1_COORDINATES.x})`;
r1.draw(R1_COORDINATES.x);

// R2
const canvasR2 = new Canvas();
const { canvas: R2Canvas, ctx: R2Ctx } = canvasR2.draw(
  document.getElementById('canvas_r2'),
);

R2Ctx.fillStyle = '#000000';
const r2 = new R2(R2Canvas, R2Ctx);
r2.drawAxes();
const R2_COORDINATES = { x: 11.5, y: 5.5 };
const R2coordinates = document.querySelector('.r2_coordinates') as HTMLElement;
R2coordinates.innerHTML = `(${R2_COORDINATES.x}, ${R2_COORDINATES.y})`;
r2.draw(R2_COORDINATES.x, R2_COORDINATES.y);

// R3
const canvasR3 = new Canvas();
const { canvas: R3Canvas, ctx: R3Ctx } = canvasR3.draw(
  document.getElementById('canvas_r3'),
);

R3Ctx.fillStyle = '#000000';
const r3 = new R3(R3Canvas, R3Ctx);
r3.drawAxes();
const R3_COORDINATES = { x: 7, y: 1, z: 3 };
const R3coordinates = document.querySelector('.r3_coordinates') as HTMLElement;
R3coordinates.innerHTML = `(${R3_COORDINATES.x}, ${R3_COORDINATES.y}, ${R3_COORDINATES.z})`;
r3.draw(R3_COORDINATES.x, R3_COORDINATES.y, R3_COORDINATES.z);

// PROJECTILE R1

const startR1ProjectileButton = document.querySelector(
  '.startR1Projectile',
) as HTMLButtonElement;
startR1ProjectileButton.addEventListener('click', startR1Projectile);

function startR1Projectile() {
  clearR1Simulation();
  clearR2Simulation();
  const interval = 500;
  const randomV0 = Math.max(1, Math.floor(Math.random() * 10));
  const randomX = Math.floor(Math.random() * 10);
  const randomP0 = randomX;
  const randomP0String = randomP0.toString();
  const details: string[] = [
    `Posición inicial: ${randomP0String}`,
    `Velocidad: ${randomV0.toString()}`,
    `Intervalo: ${interval.toString()}`,
  ];
  const detailsContainer = document.querySelectorAll('.r1_details');
  detailsContainer.forEach((d, i) => (d.innerHTML = details[i]));

  const projectile = new R1Projectile(randomV0, randomP0);
  projectile.update(interval);
}

function clearR1Simulation() {
  R1Projectile.clearInterval();
  const coordinates = document.querySelectorAll(
    '.r1_coordinate',
  ) as NodeListOf<HTMLSpanElement>;
  console.log({ coordinates });
  coordinates.forEach((c) => c.remove());
}

// PROJECTILE R2

const startR2ProjectileButton = document.querySelector(
  '.startR2Projectile',
) as HTMLButtonElement;
startR2ProjectileButton.addEventListener('click', startR2Projectile);

function startR2Projectile() {
  clearR1Simulation();
  clearR2Simulation();

  const interval = 500;
  const randomV0 = Math.max(1, Math.floor(Math.random() * 10));
  const randomX = Math.floor(Math.random() * 10);
  const randomY = Math.floor(Math.random() * 10);
  const randomP0 = new Point(randomX, randomY);
  const randomP0String = randomP0.toString();
  const details: string[] = [
    `Posición inicial: ${randomP0String}`,
    `Velocidad: ${randomV0.toString()}`,
    `Intervalo: ${interval.toString()}`,
  ];
  const detailsContainer = document.querySelectorAll('.r2_details');
  detailsContainer.forEach((d, i) => (d.innerHTML = details[i]));

  const projectile = new R2Projectile(randomV0, randomP0);
  projectile.update(interval);
}

function clearR2Simulation() {
  R2Projectile.clearInterval();
  const coordinates = document.querySelectorAll(
    '.r2_coordinate',
  ) as NodeListOf<HTMLSpanElement>;
  console.log({ coordinates });
  coordinates.forEach((c) => c.remove());
}
