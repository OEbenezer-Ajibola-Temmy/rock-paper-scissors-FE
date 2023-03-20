import { atom } from 'recoil';

const waitingAtom = atom({
  key: 'waitingAtom',
  default: false as boolean,
});

export default waitingAtom;