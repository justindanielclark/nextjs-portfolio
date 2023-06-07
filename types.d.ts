interface Position {
  x: number;
  y: number;
}
interface Speed {
  xVel: number;
  yVel: number;
}
interface hasPositionUpdate {
  update: () => void;
}
interface hasPosition {
  getX: () => number;
  getY: () => number;
}
