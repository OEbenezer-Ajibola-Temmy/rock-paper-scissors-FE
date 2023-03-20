import { atom } from 'recoil';

export const waitingAtom = atom({
  key: 'waitingAtom',
  default: false as boolean,
});
