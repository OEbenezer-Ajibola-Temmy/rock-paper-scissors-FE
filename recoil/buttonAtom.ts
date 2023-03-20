import { atom } from "recoil";

export const buttonAtom = atom({
    key: "buttonAtom",
    default: false as boolean,
});