import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const a = new ClassRoom(19);
  const b = new ClassRoom(20);
  const c = new ClassRoom(34);
  const p = [a, b, c];
  return p;
}
