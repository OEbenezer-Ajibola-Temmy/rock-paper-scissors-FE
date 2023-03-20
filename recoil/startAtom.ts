import { atom } from 'recoil';

const startAtom = atom({
  key: 'startAtom',
  default: false as boolean,
});

export default startAtom;