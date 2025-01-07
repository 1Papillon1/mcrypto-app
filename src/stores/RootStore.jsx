import { createContext, useContext } from "react";
import  UserStore  from "./UserStore";
import  CryptoStore  from "./CryptoStore";

class RootStore {
    constructor() {
        this.userStore = new UserStore(this); // Veliko slovo za klasu
        this.cryptoStore = new CryptoStore(this); // Veliko slovo za klasu
    }
}

export const rootStore = new RootStore();

export const RootStoreContext = createContext(rootStore);

export const useRootStore = () => useContext(RootStoreContext);