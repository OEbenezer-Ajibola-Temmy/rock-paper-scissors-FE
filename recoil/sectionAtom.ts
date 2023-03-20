import { atom } from 'recoil';

const sectionAtom = atom({
  key: 'sectionAtom',
  default: 0 as number,
});

export default sectionAtom;
