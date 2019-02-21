export interface UserLocalStorage {
    token: string;
    user?: User;
}

const KEY = 'LOCAL_USER_STORE';

export default {
    setLocalUser(store: UserLocalStorage) {
        window.localStorage.setItem(KEY, JSON.stringify(store));
    },
    getLocalUser(): UserLocalStorage | undefined {
        const val = window.localStorage.getItem(KEY);
        if (val) {
            const data: UserLocalStorage = JSON.parse(val);
            return data;
        } else {
            return;
        }
    },
    clearLocalUser() {
        window.localStorage.removeItem(KEY);
    }
}
