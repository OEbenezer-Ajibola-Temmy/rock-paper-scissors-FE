import { atom } from 'recoil';

const leaderboardAtom = atom({
  key: 'sidebarAtom',
  default: false as boolean,
});

export default leaderboardAtom;