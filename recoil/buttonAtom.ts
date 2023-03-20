import { atom } from "recoil";

const buttonAtom = atom({
    key: "buttonAtom",
    default: false as boolean,
});

export default buttonAtom;