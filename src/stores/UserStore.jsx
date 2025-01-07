import { makeAutoObservable } from "mobx";

class UserStore {
    rootStore;

    user = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    setUser(user) {
        this.user = user;
    }

    clearUser() {
        this.user = null;
    }
}

export default UserStore;